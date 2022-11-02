import {
  pokemonCardCont__atributeCont,
  pokemonCardCont__atributeCont__atribute,
  pokemonCardCont__atributeTitle
} from "./styles"
import React from "react"

const typeColors = {
  black: "border-gray-700 bg-gray-300/50 text-black",

  blue: "border-blue-700 bg-blue-300/50 text-blue-800",

  brown: "border-yellow-700 bg-yellow-300/50 text-yellow-800",

  gray: "border-gray-700 bg-gray-300/50 text-gray-800",

  green: "border-green-700 bg-green-300/50 text-green-800",

  pink: "border-pink-700 bg-pink-300/50 text-pink-800",

  purple: "border-purple-700 bg-purple-300/50 text-purple-800",

  red: "border-red-700 bg-red-300/50 text-red-800",

  white: "border-black bg-gray-300/50 text-black",

  yellow: "border-yellow-700 bg-yellow-300/50 text-yellow-800",
}

function CardType({ pokemon }) {
  return (
    <React.Fragment>
      <h3 className={pokemonCardCont__atributeTitle}>Tipo: </h3>
      <div className={pokemonCardCont__atributeCont}>
        {pokemon.types.map(type => (
          <p
            key={`${pokemon.id}${type.type.name}${type.type.url}`}
            className={`${pokemonCardCont__atributeCont__atribute} ${typeColors[pokemon.color]}`}
          >
            {type.type.name}
          </p>
        ))}
      </div>
    </React.Fragment>
  )
}

export { CardType }