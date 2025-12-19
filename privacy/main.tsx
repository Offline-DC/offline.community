import React from "react";
import ReactDOM from "react-dom/client";
import "../src/App.css";
import PrivacyPage from "../src/PrivacyPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto .5rem",
        maxWidth: "100%",
      }}
    >
      <PrivacyPage />
    </div>
  </React.StrictMode>
);
