import { pokemonCardCont__imgCont, pokemonCardCont__imgCont__img } from "./styles"

function CardImg({ img, pokemonName }) {
  return (
    <div className={pokemonCardCont__imgCont}>
      <img className={pokemonCardCont__imgCont__img} src={img} alt={pokemonName} />
    </div>
  )
}

export { CardImg }