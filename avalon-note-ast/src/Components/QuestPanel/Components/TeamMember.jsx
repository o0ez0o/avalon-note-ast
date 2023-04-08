import React, { useState } from "react";
import "../QuestPanel.css"; // import the CSS file for styling

function TeamMember() {
  const [status, setStatus] = useState("default"); // set initial state to "default"

  const handleClick = () => {
    if (status === "default") {
      setStatus("selected");
    } else if (status === "selected") {
      setStatus("inTeam");
    } else {
      setStatus("default");
    }
  };

  const randomNumber = Math.floor(Math.random() * 10) + 1; // generate random number from 1 to 10

  return (
    <div className={`teamMember ${status}`} onClick={handleClick}>
      {randomNumber}
    </div>
  );
}
export default TeamMember;
