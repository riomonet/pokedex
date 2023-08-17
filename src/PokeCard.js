import React from 'react';
import './PokeCard.css';

let PokeCard = ({id, name, type, base_experience}) => {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return ( <div id="PokeCard">
		 <h1 className="PokeCard-Name">{name}</h1>
		 <img className="PokeCard-Image" src={image} />
		 <p className="PokeCard-Type"> type: {type}</p>
		 <p className="PokeCard-Experience"> EXP: {base_experience} </p>
	     </div>
	   )
}

export default PokeCard;


