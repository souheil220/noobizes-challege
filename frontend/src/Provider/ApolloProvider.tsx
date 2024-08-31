// src/ApolloProvider.tsx
import React, { ReactNode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000', // L'URL de votre serveur Apollo GraphQL
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
