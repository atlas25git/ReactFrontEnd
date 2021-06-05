import React from 'react';

const ErrorExample = () => {
  let title = 'Random';

  const handleClick = () => {
    title = 'Sponsored by useState';
  }
  
  return(
    <React.Fragment>
      <h1>{title}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        Change This Heading
      </button>
    </React.Fragment>
  )
};

export default ErrorExample;
