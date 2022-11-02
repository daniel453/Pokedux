import { PokemonCard } from "../pokemonList/pokemonCard"

export function FavoritesPokemons({ visible, favorites }) {
  let visibleModal
  visible
    ? visibleModal = "bottom-0"
    : visibleModal = "-bottom-full"
  return (
    <div className={`fixed w-full h-5/6 bg-white box-border  dark:bg-gray-800 transition-all ${visibleModal} overflow-auto`}>
      <div className="flex flex-wrap w-full gap-5 items-center text-black justify-center p-10 dark:text-white">
        {favorites.length === 0
          ? <h2 className="text-xl font-bold">No se han agregado pokemones. ¡Agregar tus favoritos!</h2>
          : favorites.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.name} />)}
      </div>
    </div>
  )
}