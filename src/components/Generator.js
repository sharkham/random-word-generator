import React, { useState } from 'react';

const Generator = ({ dataset }) => {

  const [word, setWord] = useState("Click to generate a word!")

  const generate = () => {
    return dataset[Math.floor(Math.random() * dataset.length)];
  }

  const handleClick = () => {
    setWord(generate())
  }

  return (
    <div>
      <p>{word}</p>
      <button onClick={ handleClick }>Generate</button>
    </div>
  );
}

export default Generator;
