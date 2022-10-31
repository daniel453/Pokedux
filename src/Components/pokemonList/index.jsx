import { PokemonCard } from "./pokemonCard";
import { PokemonLoading } from "./PokemonLoading"

const PokemonList = ({ pokemons, loading }) => {
  const loadingCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <section className="flex flex-wrap justify-center items-center gap-4 box-border p-5">
      {loading
        ? loadingCards.map((index) => <PokemonLoading key={index} />)
        : pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.name} />)}
    </section>
  )
}

export { PokemonList }