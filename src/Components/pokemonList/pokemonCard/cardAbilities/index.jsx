import React from "react"
import {
  pokemonCardCont__atributeTitle,
  pokemonCardCont__atributeCont,
  pokemonCardCont__atributeCont__atribute
} from './style'

function CardAbilities({ pokemon }) {
  return (
    <React.Fragment>
      <h3 className={pokemonCardCont__atributeTitle}>Habilidades:</h3>
      <div className={pokemonCardCont__atributeCont}>
        {pokemon.abilities.map(ability => (
          <p
            className={pokemonCardCont__atributeCont__atribute}
            key={`${pokemon.name}${ability.ability.name}`}
          >
            {ability.ability.name}
          </p>
        ))}
      </div>
    </React.Fragment>
  )
}

export { CardAbilities }