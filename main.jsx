import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import VotingAgeChecker from "./index.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VotingAgeChecker />
  </StrictMode>,
);