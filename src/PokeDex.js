import React from 'react';
import PokeCard from './PokeCard'
import Deck from './Deck'
import './PokeDex.css'

let PokeDex = () => {
    return Deck.map(it =>
	<PokeCard name={it.name}
		  id={it.id}
		  type={it.type}
		  base_experience={it.base_experience}/>)
    }

export default PokeDex;
