import React, { useState } from "react";
import "../StartingPage.css";
import svg34455 from "./svg34455.svg";
import PopUp from "../../PopUp/PopUp.jsx";
import { useNavigate } from "react-router-dom";

function GameModule({
  status,
  numberOfPlayers,
  onStartGame,
  rolesText,
  roundsText,
}) {
  const [startingPlayer, setStartingPlayer] = useState(
    Math.floor(Math.random() * numberOfPlayers) + 1
  );
  const history = useNavigate();

  const regenerateNumber = () => {
    setStartingPlayer(Math.floor(Math.random() * numberOfPlayers) + 1);
  };

  const handleGotItButtonClick = () => {
    const teamLeader = "player " + startingPlayer;
    history({
      pathname: "/notebook",
      search: `?numberOfPlayers=${numberOfPlayers}&teamLeader=${teamLeader}`,
    });
  };

  const StartGameContent = () => {
    return (
      <div class="confirmation-dialog">
        <div class="regular-paragraph">
          <span>Merlin · Percival · Servant x4</span>
          <br />
          <span>Mordred · Assassin · Morgana · Oberon</span>
        </div>
        <img src={svg34455} alt="svg34455.svg" className="questTemplate" />
        <div className="starting-player-container">
          <div className="regular-paragraph">Starting Player: </div>
          <div className="starting-player-number">{startingPlayer}</div>
        </div>
        <div class="button-row">
          <button className="button-2nd" onClick={regenerateNumber}>
            Refresh
          </button>
          <button className="button-1st" onClick={handleGotItButtonClick}>
            Got It!
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`game-module ${status}`}>
      <div className="game-module-header">
        <div className="player-count">{numberOfPlayers} Players</div>
        <button className="start-game-button" onClick={onStartGame}>
          <PopUp
            disabled={status !== ""}
            title="Start Game"
            titleClass={"start-game-button-start"}
            inCardTitle={`Start a ${numberOfPlayers} Players Game`}
          >
            {StartGameContent()}
          </PopUp>
        </button>
      </div>
      <div className="game-module-text">{rolesText}</div>
      <div className="game-module-text">{roundsText}</div>
    </div>
  );
}

export default GameModule;
