import React from "react";
import ReactDOM from "react-dom";
import ApolloProvider from "./Provider/ApolloProvider";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import "./assets/styles/tailwind.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ApolloProvider>
    <App />
  </ApolloProvider>
);
reportWebVitals();
