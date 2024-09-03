// src/pages/AccountPage.tsx
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "../assets/styles/AccountPage.css"; // Import the CSS file
import CardTable from "../components/Cards/CardTable"; // Ensure the import path is correct

const GET_ACCOUNT_BY_RIOT_ID = gql`
  query GetAccount($gameName: String!, $tagLine: String!, $region: String!) {
    accountByRiotID(gameName: $gameName, tagLine: $tagLine, region: $region)
  }
`;

const GET_MATCHES_BY_PUUID = gql`
  query GetMatches(
    $puuid: String!
    $region: String!
    $start: Int
    $count: Int
  ) {
    matchesByPUUID(puuid: $puuid, region: $region, start: $start, count: $count)
  }
`;

const AccountPage: React.FC = () => {
  const location = useLocation();

  const { summonerName, region } = location.state || {};

  const [gameName, tagLine]: string[] = summonerName;
  const { data: accountData, error: accountError } = useQuery(
    GET_ACCOUNT_BY_RIOT_ID,
    {
      variables: { gameName, tagLine, region },
      skip: !(gameName && tagLine && region),
    }
  );
  // State to store the puuid for the second query
  const [puuid, setPuuid] = useState<string>("");

  // Effect to update puuid once data is available
  useEffect(() => {
    if (accountData?.accountByRiotID) {
      setPuuid(accountData.accountByRiotID);
    }
  }, [accountData]);

  const {
    loading,
    data: matchesData,
    error: matchError,
  } = useQuery(GET_MATCHES_BY_PUUID, {
    variables: { puuid, region },
    skip: !(puuid && region),
  });

  const error = accountError || matchError;
  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        {puuid} Error: {error.message}
      </p>
    );
  return (
    <>
      <div className="bg-image"></div>
      <div className="home-container">
        <h1 className="text-4xl font-bold mb-6 text-white">Account Information</h1>

        <div className="w-full  px-4">
          {
            <CardTable
              data={matchesData}
              puuid={puuid}
              region={region}
              color="light"
            />
          }
        </div>
      </div>
    </>
  );
};

export default AccountPage;
