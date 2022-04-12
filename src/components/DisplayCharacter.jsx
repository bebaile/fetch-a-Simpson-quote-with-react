import React from 'react';

function DisplayCharacter({ character }) {
  return (
    <div className="main">
      
      <h1 className="name">{character[0].character}</h1>
      <div className="pres">
        <img src={character[0].image} />
        <div className="quotation">{character[0].quote}</div>
      </div>
    </div>
  );
}

export default DisplayCharacter;
