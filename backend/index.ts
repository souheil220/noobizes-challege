import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";
import axios from "axios";
const dotenv = require("dotenv");
// dotenv.config({
//   path: "./config.env",
// });

const API_KEY = process.env.API_KEY;

const typeDefs = gql`
  type Account {
    puuid: String
  }

  type Summoner {
    id: String
    accountId: String
    puuid: String
    profileIconId: Int
    revisionDate: Float
    summonerLevel: Int
  }

  type Match {
    matchId: String
    participants: [Participant]
    gameCreation: String
    gameDuration: String
    gameEndTimestamp: String
  }

  type Participant {
    riotIdGameName: String
    riotIdTagline: String
    championName: String
    kills: Int
    deaths: Int
    assists: Int
  }

  type Query {
    accountByRiotID(
      gameName: String!
      tagLine: String!
      region: String!
    ): String
    summonerByPUUID(encryptedPUUID: String!): Summoner
    matchesByPUUID(
      puuid: String!
      region: String!
      start: Int
      count: Int
    ): [String]
    matchDetails(matchId: String!, puuid: String!, region: String!): Match
  }
`;

// Define the resolvers
const resolvers = {
  Query: {
    accountByRiotID: async (
      _: any,
      {
        gameName,
        tagLine,
        region,
      }: { gameName: string; tagLine: string; region: string }
    ) => {
      const response = await axios.get(
        `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${API_KEY}`
      );
      return response.data.puuid;
    },
    summonerByPUUID: async (
      _: any,
      { encryptedPUUID }: { encryptedPUUID: string }
    ) => {
      const response = await axios.get(
        `https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${encryptedPUUID}?api_key=${API_KEY}`
      );
      return response.data;
    },
    matchesByPUUID: async (
      _: any,
      {
        puuid,
        region,
        start = 0,
        count = 10,
      }: { puuid: string; region: string; start?: number; count?: number }
    ) => {
      const response = await axios.get(
        `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}&api_key=${API_KEY}`
      );
      return response.data;
    },
    matchDetails: async (
      _: any,
      {
        matchId,
        puuid,
        region,
      }: { matchId: string; puuid: string; region: string }
    ) => {
      const response = await axios.get(
        `https://${region}.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${API_KEY}`
      );

      return {
        matchId,
        participants: response.data.info.participants
          .filter((participant: any) => participant.puuid === puuid)
          .map((participant: any) => ({
            championName: participant.championName,
            riotIdGameName: participant.riotIdGameName,
            riotIdTagline: participant.riotIdTagline,
            kills: participant.kills,
            deaths: participant.deaths,
            assists: participant.assists,
          })),
        gameCreation: ConvertToDate(new Date(response.data.info.gameCreation)),
        gameDuration: response.data.info.gameEndTimestamp
          ? response.data.info.gameDuration
          : response.data.info.gameDuration / 1000,
        gameEndTimestamp: ConvertToDate(
          new Date(response.data.info.gameEndTimestamp)
        ),
      };
    },
  },
};

function ConvertToDate(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}

// Create an instance of Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
// Start the server
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
