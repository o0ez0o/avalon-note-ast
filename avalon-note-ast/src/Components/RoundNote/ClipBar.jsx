import React, { useState } from "react";
import Clip from "./Clip";

const ClipBar = ({ clipbarName, clipNames, selected, handleClipClick }) => {
  // const [selectedClips, setSelectedClips] = useState([]);

  // const handleClipClick = (clipName) => {
  //   const index = selectedClips.indexOf(clipName);
  //   if (index === -1) {
  //     setSelectedClips([...selectedClips, clipName]);
  //   } else {
  //     const newSelectedClips = [...selectedClips];
  //     newSelectedClips.splice(index, 1);
  //     setSelectedClips(newSelectedClips);
  //   }
  // };

  return (
    <div style={{  display: "flex", flexDirection: "column", alignItems: "left", gap: "16px", padding: "12px" }}>
      <div
        style={{
          height: "19px",
          align:"left",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "19px",
          color: "#252C34",
          flex: "none",
          order: "0",
          flexGrow: 0,
        }}
      >
        {clipbarName}
      </div>
      <div style={{display: "flex", flexDirection: "row", gap: "12px", flexWrap:"wrap" }}>
        {clipNames.map((clipName) => (
          <Clip
            key={clipName}
            name={clipName}
            isSelected={selected.includes(clipName)}
            onClick={() => handleClipClick(clipName)}
          />
        ))}
      </div>
    </div>
  );
};

export default ClipBar;
