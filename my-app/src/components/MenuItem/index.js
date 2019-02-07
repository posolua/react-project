import React from 'react';

const Note = ({ name, price, image }) => (
  <div className="card__menu">
    <h4>{name}</h4>
    <img src={image} alt={name} className="card__img" />
    <p>{price} грн.</p>
  </div>
);

export default Note;
