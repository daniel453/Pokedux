import { CardHeader } from './cardHeader'
import { CardImg } from './cardImg'
import { CardType } from './cardType'
import {
  pokemonCardCont__black,
  pokemonCardCont__blue,
  pokemonCardCont__brown,
  pokemonCardCont__gray,
  pokemonCardCont__green,
  pokemonCardCont__pink,
  pokemonCardCont__purple,
  pokemonCardCont__red,
  pokemonCardCont__white,
  pokemonCardCont__yellow
} from './cardStyles'
import { usePokemons } from '../../../Hooks/usePokemons'
import { useUI } from '../../../Hooks/useUI'

const typeColors = {
  black: pokemonCardCont__black,
  blue: pokemonCardCont__blue,
  brown: pokemonCardCont__brown,
  gray: pokemonCardCont__gray,
  green: pokemonCardCont__green,
  pink: pokemonCardCont__pink,
  purple: pokemonCardCont__purple,
  red: pokemonCardCont__red,
  white: pokemonCardCont__white,
  yellow: pokemonCardCont__yellow,
}

const PokemonCard = ({ pokemon }) => {
  const { addToFavorites } = usePokemons()
  const { getAction, iconFavorite } = useUI(pokemon)

  return (
    <div className={typeColors[pokemon.color]}>
      <CardHeader
        pokemon={pokemon}
        addToFavorites={addToFavorites}
        action={getAction(pokemon)}
        iconFavorite={iconFavorite}
      />
      <CardImg
        img={pokemon.sprites.other['official-artwork'].front_default}
        pokemonName={pokemon.name}
        pokemonColor={pokemon.color}
      />
      <CardType pokemon={pokemon} />
    </div>
  )
}

export { PokemonCard }