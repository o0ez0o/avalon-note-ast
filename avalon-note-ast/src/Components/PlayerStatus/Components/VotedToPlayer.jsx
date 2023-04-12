import React from "react";
import "../PlayerStatus.css";

const VotedToPlayer = ({ VotedPlayerID, VotedTimes }) => {
  return (
    <div className="voted-to-player">
      <div className="voted-player-id">
        {VotedPlayerID}
        <sub style={{ fontSize: "0.6em" }}>{VotedTimes}</sub>
      </div>
    </div>
  );
};

export default VotedToPlayer;
