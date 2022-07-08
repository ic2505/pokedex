import React from "react";

const Card = (props) => {

  return (
    <div className='bg-light-green dib br3 pas3 ma2 grow bw2 shadow-5'>
      <img alt="pokemon" src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'></img>
      <div>
        <h4>{props.pokeProp}</h4>
        <p>{props.pokeProp}'s' powers</p>
        <p>Attack: 100</p>
        <p>Defense: 50</p>
        <p>Hello, {props.pokeProp} </p>
      </div>
    </div>
  );
};

export default Card;