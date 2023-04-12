import React from "react";
import QuestResult from "./Components/QuestResult.jsx";
import "./QuestPanel.css";

export function QuestPanel(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "36px",
        width: "fill",
        marginTop: "24px",
      }}
    >
      <QuestResult />
      <QuestResult />
      <QuestResult />
      <QuestResult />
      <QuestResult />
    </div>
  );
}

export default QuestPanel;
