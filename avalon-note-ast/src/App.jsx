import React from "react";
import RoundNote from "./Components/RoundNote/RoundNote.jsx";
import QuestPanel from "./Components/QuestPanel/QuestPanel.jsx";
import Header from "./Components/Header/Header.jsx";

export function App(props) {
  const clipNames = [
    "P1",
    "P2",
    "P3",
    "P4",
    "P5",
    "P6",
    "P7",
    "P8",
    "P9",
    "P10",
  ];
  const statusNames = [
    "FAILED",
    "SUCCEED",
    "FAILED x2",
    "FAILED x3",
    "FAILED x4",
  ];
  const onSubmit = (data) => {
    console.log(data);
    console.log(data.selectedPlayerID, data.agreedPlayerID, data.questResult);
  };

  // return (
  //   <div>
  //     <ClipBar clipbarName='Selected' clipNames={clipNames} />
  //     <ClipBar clipbarName='Agreed' clipNames={clipNames} />
  //     <ClipBar clipbarName='Quest Status' clipNames={statusNames} />
  //   </div>
  // );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "36px",
        width: "wrap",
      }}
    >
      <div style={{ flex: 1 }}>
        <Header />
        <QuestPanel />
      </div>
      <RoundNote onSubmit={onSubmit}></RoundNote>
      <div style={{ width: "320px" }}></div>
    </div>
  );
}
export default App;
