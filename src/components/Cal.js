import React from "react";

function Add(a, b) {
    let sum = a + b;
    return sum;
  }
  function Sub(a, b) {
    let Sub = a - b;
    return Sub;
  }


export { Add, Sub };


//put this code in App.js

// import "./App.css";

// import {Add,Sub} from "./components/Cal";

// function App() {
//   return (
//     <>
//       <div className="App">
      
//         <ul>
//           <li>{Add(40,4)}</li>
//           <li>{Sub(40,4)}</li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default App;