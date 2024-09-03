// Centralized type definitions

export interface Match {
  matchId: string;
  participants: Participant[];
  gameCreation: string;
  gameDuration: string;
  gameEndTimestamp: string;
}

export interface Participant {
  riotIdGameName: string;
  riotIdTagline: string;
  championName: string;
  kills: number;
  deaths: number;
  assists: number;
}

export interface MatchData {
  matchesByPUUID: string[];
}

export interface AccountData {
  accountByRiotID: string;
}

export interface AccountVars {
  gameName: string;
  tagLine: string;
}

export interface MatchVars {
  puuid: string;
}

// Data returned from the GET_MATCH_DETAILS query
export type MatchDetailData = {
  matchDetails: Match;
};

// Variables used in the GET_MATCH_DETAILS query
export type MatchDetailVars = {
  matchId: string;
  puuid: string;
};
