// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import MatchDetailsPage from "./pages/MatchDetailsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account/:gameName/:tagLine" element={<AccountPage />} />
        <Route path="/match/:matchId/:puuid" element={<MatchDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
