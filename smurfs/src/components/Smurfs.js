import React, { useContext } from "react";

import SmurfContext from "../contexts/SmurfContext";

import Smurf from "./Smurf";

const Smurfs = props => {
  const { smurfs, addSmurf } = useContext(SmurfContext);

  return (
    <div>
      {smurfs.map(smurf => (
        <Smurf smurf={smurf} addSmurf={addSmurf} />
      ))}
    </div>
  );
};

export default Products;
