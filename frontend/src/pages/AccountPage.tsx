// src/pages/AccountPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "../assets/styles/AccountPage.css"; // Import the CSS file
import CardTable from "../components/Cards/CardTable"; // Ensure the import path is correct

const GET_ACCOUNT_BY_RIOT_ID = gql`
  query GetAccount($gameName: String!, $tagLine: String!) {
    accountByRiotID(gameName: $gameName, tagLine: $tagLine)
  }
`;

const GET_MATCHES_BY_PUUID = gql`
  query GetMatches($puuid: String!, $start: Int, $count: Int) {
    matchesByPUUID(puuid: $puuid, start: $start, count: $count)
  }
`;

const AccountPage: React.FC = () => {
  const { gameName, tagLine } = useParams<{
    gameName: string;
    tagLine: string;
  }>();

  const {
    data: accountData,
    error: accountError,
  } = useQuery(GET_ACCOUNT_BY_RIOT_ID, {
    variables: { gameName, tagLine },
    skip: !(gameName && tagLine),
  });
  // State to store the puuid for the second query
  const [puuid, setPuuid] = useState<string>("");

  // Effect to update puuid once data is available
  useEffect(() => {
    if (accountData?.accountByRiotID) {
      setPuuid(accountData.accountByRiotID);
    }
  }, [accountData]);

  const {
    data: matchesData,
    error: matchError,
  } = useQuery(GET_MATCHES_BY_PUUID, {
    variables: { puuid },
    skip: !puuid,
  });

  const error = accountError || matchError;

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
        <h1>Account Information</h1>

        <div className="w-full  px-4">
          {<CardTable data={matchesData} puuid={puuid} color="light" />}
        </div>
      </div>
    </>
  );
};

export default AccountPage;
