import React, { Component } from "react";
import { SmurfProvider } from "../contexts/SmurfContext";
import Smurfs from "./Smurf";

import "./App.css";

class App extends Component {
  render() {
    return (
      <SmurfProvider>
        <div className="App">
          {/* <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
          <Smurfs />
        </div>
      </SmurfProvider>
    );
  }
}

export default App;

// export default function App () {
//   const [smurf, addSmurf] = useState([]);
//   const addSmurf = smurf => {
//     addSmurf([...addSmurf, smurf]);
//   };

//   return (
//     <SmurfProvider>
//     <div className="App">
//       <Smurf />
//     </div>
//     </SmurfProvider>
//   )
// }
