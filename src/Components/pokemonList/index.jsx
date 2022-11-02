import { PokemonCard } from "./pokemonCard";
import { PokemonLoading } from "./PokemonLoading"

const PokemonList = ({ pokemons, loading }) => {
  return (
    <section className="flex flex-wrap justify-center items-center gap-4 box-border p-5 dark:text-white">
      {loading
        ? [...new Array(10)].map((_, i) => <PokemonLoading key={i} />)
        : pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.name} />)}
    </section>
  )
}

export { PokemonList }