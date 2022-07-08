import React from "react";

const Card = (props) => {
  return (
    <div>
      <img alt="pokemon" src=''></img>
      <div>
        <h2>Pikachu</h2>
        <p>Powers: electrocute</p>
        <p>Attack: 100</p>
        <p>Defense: 50</p>
        <p>Hello, {props.pokeProp} </p>
      </div>
    </div>
  );
};

export default Card;