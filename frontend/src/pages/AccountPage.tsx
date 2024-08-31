// src/pages/AccountPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const GET_ACCOUNT_BY_RIOT_ID = gql`
  query GetAccount($gameName: String!, $tagLine: String!) {
    accountByRiotID(gameName: $gameName, tagLine: $tagLine) {
      puuid
    }
  }
`;

interface AccountData {
  accountByRiotID: {
    puuid: string;
  };
}

interface AccountVars {
  gameName: string;
  tagLine: string;
}

const AccountPage: React.FC = () => {
  const { gameName, tagLine } = useParams<{ gameName: string; tagLine: string }>();
  const { loading, error, data } = useQuery<AccountData, AccountVars>(GET_ACCOUNT_BY_RIOT_ID, {
    variables: { gameName: gameName!, tagLine: tagLine! },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Account Information</h1>
      <p>PUUID: {data?.accountByRiotID.puuid}</p>
    </div>
  );
};

export default AccountPage;
