import { PokemonCard } from "./PokemonCard"

const PokemonList = ({ pokemons }) => {

  return (
    <section className="grid items-center gap-4 box-border p-5 sm:grid-cols-2 md:grid-cols-4">
      {pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.name} />)}
    </section>
  )
}

export { PokemonList }