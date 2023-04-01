import React from "react";
import "../QuestPanel.css"; // import the CSS file for styling

function svg150() {
    return(
        <svg className='svg150' width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 103.889V46.111C139.997 43.578 139.329 41.0902 138.061 38.8972C136.793 36.7042 134.971 34.8831 132.778 33.6166L82.2222 4.72767C80.0264 3.4599 77.5355 2.79248 75 2.79248C72.4645 2.79248 69.9736 3.4599 67.7778 4.72767L17.2222 33.6166C15.0286 34.8831 13.2065 36.7042 11.9389 38.8972C10.6713 41.0902 10.0026 43.578 10 46.111V103.889C10.0026 106.422 10.6713 108.91 11.9389 111.103C13.2065 113.296 15.0286 115.117 17.2222 116.383L67.7778 145.272C69.9736 146.54 72.4645 147.207 75 147.207C77.5355 147.207 80.0264 146.54 82.2222 145.272L132.778 116.383C134.971 115.117 136.793 113.296 138.061 111.103C139.329 108.91 139.997 106.422 140 103.889Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> 
    )
}

function svg90() {
    return(
        <svg width="151" height="150" viewBox="0 0 151 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120.885 95V55C120.883 53.2464 120.42 51.524 119.542 50.0058C118.665 48.4876 117.403 47.2268 115.885 46.35L80.8848 26.35C79.3646 25.4723 77.6401 25.0103 75.8848 25.0103C74.1294 25.0103 72.405 25.4723 70.8848 26.35L35.8848 46.35C34.3661 47.2268 33.1047 48.4876 32.2271 50.0058C31.3495 51.524 30.8866 53.2464 30.8848 55V95C30.8866 96.7536 31.3495 98.4759 32.2271 99.9942C33.1047 101.512 34.3661 102.773 35.8848 103.65L70.8848 123.65C72.405 124.528 74.1294 124.99 75.8848 124.99C77.6401 124.99 79.3646 124.528 80.8848 123.65L115.885 103.65C117.403 102.773 118.665 101.512 119.542 99.9942C120.42 98.4759 120.883 96.7536 120.885 95Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
function QuestIcon({ status, numberOfPlayer }) {
  const isProtected = status === "protected";
  
 //from ChatGPT
//   return (
//     <div className="questIcon">
//       <svg className="svg150">
//         <use href="150.svg#icon" />
//       </svg>
//       {isProtected && (
//         <svg className="svg90">
//           <use href="90.svg#icon" />
//         </svg>
//       )}
//       <div className="roundText">{numberOfPlayer}</div>
//     </div>
//   );
// }

// return (
//     <div className="questIcon">
//       <icon150 className="svg150"/>
      
//       {isProtected && (
//         <icon90 className="svg90"/>
//       )}
//       <div className="roundText">{numberOfPlayer}</div>
//     </div>
//   );
// }

//No Style, directly used
// return (
//     <div className="questIcon">
//       <embed src="150.svg" />
//       {isProtected && (
//         <embed src="90.svg" />
//       )}
//       <div className="roundText">{numberOfPlayer}</div>
//     </div>
//   );
// }


// Original svg
return (
    <div className="questIcon">
        {svg150()}
      {isProtected && (
        svg90()
      )}
      <div className="roundText" style={{ fontWeight: 800 }}>{numberOfPlayer}</div>
    </div>
  );
}

/* <img className="svg150" src="150.svg" alt="" /> */
export default QuestIcon;