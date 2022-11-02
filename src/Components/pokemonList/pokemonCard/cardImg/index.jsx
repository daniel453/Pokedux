import {
  pokemonCardCont__imgCont__black,
  pokemonCardCont__imgCont__blue,
  pokemonCardCont__imgCont__brown,
  pokemonCardCont__imgCont__gray,
  pokemonCardCont__imgCont__green,
  pokemonCardCont__imgCont__pink,
  pokemonCardCont__imgCont__purple,
  pokemonCardCont__imgCont__red,
  pokemonCardCont__imgCont__white,
  pokemonCardCont__imgCont__yellow,
  pokemonCardCont__imgCont__img,
} from "./styles"

const typeColors = {
  black: pokemonCardCont__imgCont__black,
  blue: pokemonCardCont__imgCont__blue,
  brown: pokemonCardCont__imgCont__brown,
  gray: pokemonCardCont__imgCont__gray,
  green: pokemonCardCont__imgCont__green,
  pink: pokemonCardCont__imgCont__pink,
  purple: pokemonCardCont__imgCont__purple,
  red: pokemonCardCont__imgCont__red,
  white: pokemonCardCont__imgCont__white,
  yellow: pokemonCardCont__imgCont__yellow,
}

function CardImg({ img, pokemonName, pokemonColor }) {
  return (
    <div className={typeColors[pokemonColor]}>
      <img className={pokemonCardCont__imgCont__img} src={img} alt={pokemonName} />
    </div>
  )
}

export { CardImg }