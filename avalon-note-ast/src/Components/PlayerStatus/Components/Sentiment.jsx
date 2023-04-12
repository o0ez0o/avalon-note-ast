import React from "react";
import VotedToPlayer from "./VotedToPlayer.jsx";
import "../PlayerStatus.css";
import YesSvg from "../Yes.svg";
import NoSvg from "../No.svg";

const Sentiment = ({ VotedPlayerIDs, VoteSentiment }) => {
  const svg = VoteSentiment === "Yes" ? YesSvg : NoSvg;

  const players = Object.entries(VotedPlayerIDs);

  return (
    <div className="sentiment">
      <div className="sentiment-svg">
        <img src={svg} alt={VoteSentiment} />
      </div>
      <div className="sentiment-votes">
        {players.map(([playerID, votedTimes], index) => {
          return (
            <React.Fragment key={playerID}>
              <VotedToPlayer VotedPlayerID={playerID} VotedTimes={votedTimes} />
              {index < players.length - 1 && (
                <div className="sentiment-gap" style={{ width: 16 }} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Sentiment;
