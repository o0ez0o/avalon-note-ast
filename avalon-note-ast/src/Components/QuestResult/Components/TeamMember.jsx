import React, { useState } from "react";
import "../QuestResult.css"; // import the CSS file for styling

function TeamMember() {
  const [status, setStatus] = useState("default"); // set initial state to "default"

  const handleClick = () => {
    if (status === "default") {
      setStatus("good");
    } else if (status === "good") {
      setStatus("evil");
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
