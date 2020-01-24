import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const SmurfContext = createContext();

export const SmurfProvider = props => {
  const [smurf, setSmurf] = useState([{}]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurf(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <SmurfContext.Provider value={[smurf, setSmurf]}>
      {props.children}
      {console.log(props.children)}
    </SmurfContext.Provider>
  );
};

export default SmurfContext;
