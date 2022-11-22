import {
  pokemonCardCont__title,
  pokemonCardCont__title_btn,
  pokemonCardCont__title_title
} from "./styles"

function CardHeader({ pokemon, action }) {
  return (
    <div className={pokemonCardCont__title}>
      <h3 className={pokemonCardCont__title_title}>{pokemon.name}</h3>
      <button
        className={pokemonCardCont__title_btn}
        onClick={() => action.doSomthingToFavorites(pokemon)}
      >
        <img src={action.iconFavorite} alt={pokemon} />
      </button>
    </div>
  )
}

export { CardHeader }