import React from "react";
import Sentiment from "./Components/Sentiment.jsx";
import "./PlayerStatus.css";

const PlayerStatus = ({ HighlightedPlayerID }) => {
  return (
    <div>
      <div className="player-status">
        <div className="player-behavior">
          Player {HighlightedPlayerID} behavior
        </div>
        <div className="sentiment-container">
          <Sentiment
            VotedPlayerIDs={{
              1: 2,
              2: 5,
              3: 2,
              4: 1,
              5: 1,
              6: 1,
              7: 2,
              8: 5,
              9: 1,
              10: 1,
            }}
            VoteSentiment="Yes"
          />

          <Sentiment
            VotedPlayerIDs={{ 1: 2, 2: 5, 5: 1, 6: 2 }}
            VoteSentiment="No"
          />
        </div>
      </div>
      <div className="line_2"></div>
    </div>
  );
};

export default PlayerStatus;
