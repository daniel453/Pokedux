import {
  pokemonCardCont__atributeCont,
  pokemonCardCont__atributeCont__atribute,
  pokemonCardCont__atributeTitle
} from "./styles"
import React from "react"

function CardType({ pokemon }) {
  return (
    <React.Fragment>
      <h3 className={pokemonCardCont__atributeTitle}>Tipo: </h3>
      <div className={pokemonCardCont__atributeCont}>
        {pokemon.types.map(type => (
          <p
            key={`${pokemon.id}${type.type.name}${type.type.url}`}
            className={pokemonCardCont__atributeCont__atribute}
          >
            {type.type.name}
          </p>
        ))}
      </div>
    </React.Fragment>
  )
}

export { CardType }