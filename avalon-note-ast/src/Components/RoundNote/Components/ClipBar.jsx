import React, { useState } from "react";
import Clip from "./Clip";
import "@fontsource/poppins";

const ClipBar = ({ clipbarName, clipNames, selected, handleClipClick }) => {

  return (
    <div style={{  display: "flex", flexDirection: "column", alignItems: "left", gap: "16px", paddingBottom: '24px' }}>
      <div
        style={{
          height: "19px",
          align:"left",
          fontStyle: "normal",
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "19px",
          color: "#ffffff",
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
