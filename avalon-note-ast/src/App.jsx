import React from 'react';
import RoundNote from "./RoundNote.jsx"



export function App(props) {
  const clipNames = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'];
  const statusNames = ['FAILED', 'SUCCEED', 'FAILED x2', 'FAILED x3', 'FAILED x4'];
  const onSubmit = (data) => {
    console.log (data);
    console.log (data.selectedPlayerID, data.agreedPlayerID, data.questResult)
  }
  

  // return (
  //   <div>
  //     <ClipBar clipbarName='Selected' clipNames={clipNames} />
  //     <ClipBar clipbarName='Agreed' clipNames={clipNames} />
  //     <ClipBar clipbarName='Quest Status' clipNames={statusNames} />
  //   </div>
  // );
  return (
    <div>
      <RoundNote onSubmit = {onSubmit}></RoundNote>

    </div>
  )
}
export default App
// Log to console
// console.log('Hello console')