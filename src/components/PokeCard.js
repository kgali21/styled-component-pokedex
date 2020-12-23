import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PokeTitle = styled.h1`
  color: blue;
`;

const PokeImg = styled.img`
  height: 25vh;
  width: 15vw;
`;

const PokeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 50vw;
  background-color: lightblue;
  width: 100%;
  height: 100%;
`;

const PokeCard = ({ image, name, attack, hp, speed, url}) => (
  <PokeCardWrapper>
    <PokeImg src={image} alt={name} />
    <PokeTitle>{name}</PokeTitle>
    <p>Attack: {attack}</p>
    <p>Hp: {hp}</p>
    <p>Speed: {speed}</p>
    <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
  </PokeCardWrapper>
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