// src/ApolloProvider.tsx
import React, { ReactNode } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";

const BACK_PORT = process.env.REACT_APP_BACK_PORT;

if (!BACK_PORT) {
  throw new Error("BACK_PORT environment variable is not defined");
}
const client = new ApolloClient({
  uri: `http://localhost:${BACK_PORT}`, // L'URL de votre serveur Apollo GraphQL
  cache: new InMemoryCache(),
});

// Définir les types des props
interface ApolloProviderProps {
  children: ReactNode;
}

const ApolloProvider: React.FC<ApolloProviderProps> = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
