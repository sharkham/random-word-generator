import React, { useState } from 'react';

const Generator = ({ dataset }) => {

  const generate = () => {
    return dataset[Math.floor(Math.random() * dataset.length)];
  }

  const [word, setWord] = useState(() => generate())


  const handleClick = () => {
    setWord(generate())
  }

  return (
    <div>
      <p className="generated-word">{word}</p>
      <button onClick={ handleClick }>Generate</button>
    </div>
  );
}

export default Generator;
