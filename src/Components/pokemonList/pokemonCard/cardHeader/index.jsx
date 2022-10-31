import {
  pokemonCardCont__title,
  pokemonCardCont__title_btn,
  pokemonCardCont__title_title
} from "./styles"

function CardHeader({ pokemon, doSomthingToFavorites, iconFavorite }) {
  return (
    <div className={pokemonCardCont__title}>
      <h3 className={pokemonCardCont__title_title}>{pokemon.name}</h3>
      <button
        className={pokemonCardCont__title_btn}
        onClick={() => doSomthingToFavorites(pokemon)}
      >
        {iconFavorite}
      </button>
    </div>
  )
}

export { CardHeader }