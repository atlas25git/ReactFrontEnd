import React, { useState } from 'react';

const UseStateBasics = () => {
  const[text,setText] = useState('random Title')
  
  var flag=false;
  const handleClick=()=>{
    if(!flag)
    {setText('Changed useState');
     flag=(true);
    return}
    else setText('random title'); flag=(false);
  }

  return (
  <React.Fragment>
    <h2>{text}</h2>
    <button className='btn' onClick={handleClick}>useState</button>
  </React.Fragment>);
};

export default UseStateBasics;
