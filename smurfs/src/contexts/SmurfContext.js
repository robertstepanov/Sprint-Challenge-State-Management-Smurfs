import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const SmurfContext = createContext();

export const SmurfProvider = props => {
  const [smurf, setSmurf] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurf(res.data[0]);
        console.log(res.data[0]);
      })
      .catch(err => console.log(err));
  }, []);

  async function makePostRequest() {
    let params = {
      name: "Shorty",
      age: 250,
      height: '7cm',
      id: 1
    };
    console.log(params);

    let res = await axios.post("http://localhost:3333/smurfs", params);

    console.log(res.data);
  }

  makePostRequest();

  return (
    <SmurfContext.Provider value={[smurf, setSmurf]}>
      {props.children}
      {/* {console.log(props.children)} */}
    </SmurfContext.Provider>
  );
};

export default SmurfContext;
