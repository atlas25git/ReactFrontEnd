import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
    name:"atlas",
    age: 12,
    message: 'random'
  });

  const changeMessage = () => {
    setPerson({...person, message:'Spread Operator makes this possible'});
  }

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
