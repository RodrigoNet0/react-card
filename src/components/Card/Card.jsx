import React, { useState } from 'react';
import list from './data.json';

function listCards() {
  const [cards, setCards] = useState(list);

  const removeCard = (index) => {
    setCards(cards.filter((card, i) => i !== index));
  };

  return (
    <div className='containerCards'>
      {cards.map((user, index) => (
        <div key={index} className="card" onClick={() => removeCard(index)}>
          <img className="avatar" src={user.img} alt={user.nome}></img>
          <h2 className="card-title">{user.nome}</h2>
          <p className="card-text">Dev</p>
          <a href={user.link} className="link" target="_blank">GitHub</a>
        </div>
      ))}
    </div>
  );
}

export default listCards;