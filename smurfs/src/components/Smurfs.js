import React, { useContext } from "react";

import SmurfContext from "../contexts/SmurfContext.js";

import Smurf from "./Smurf";

const Smurfs = props => {
  const { smurf, addSmurf } = useContext(SmurfContext);

  return (
    <div>
      {smurf.map(newSmurf => (
        <Smurf
          key={newSmurf.id}
          newSmurf={newSmurf}
          addSmurf={addSmurf}
        />
      ))}
    </div>
  );
};

export default Smurfs;
