import React from 'react';
import PropTypes from 'prop-types';

const PokeCard = ({ image, name, attack, hp, speed, url}) => (
  <>
    <img src={image} alt={name} />
    <h1>{name}</h1>
    <p>{attack}</p>
    <p>{hp}</p>
    <p>{speed}</p>
    <p>{url}</p>
  </>
);

PokeCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  attack: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
}

export default PokeCard;