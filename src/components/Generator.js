import React from 'react';

const Generator = ({ dataset }) => {

  const generate = () => {
    return dataset[Math.floor(Math.random() * dataset.length)];
  }

  return (
    <div>
      <p>Randomly generated word goes here.</p>
      <button>Generate</button>
    </div>
  );
}

export default Generator;
