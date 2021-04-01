import React, { useState } from 'react';

const Generator = ({ dataset }) => {

  const [word, setWord] = useState("Click to generate a Pokémon!")

  const generate = () => {
    let randomWord = dataset[Math.floor(Math.random() * dataset.length)]
    console.log(randomWord);
    return randomWord;
  }

  return (
    <div>
      <p>Randomly generated word goes here.</p>
      <button onClick={ generate }>Generate</button>
    </div>
  );
}

export default Generator;
