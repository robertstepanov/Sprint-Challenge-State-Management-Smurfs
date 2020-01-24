import React from 'react';

const Smurf = props => {
  return (
    <div className="smurf">
      <h1>Smurf Village</h1>
      <p>{props.smurf}</p> 
    </div>
  )
}

export default Smurf;