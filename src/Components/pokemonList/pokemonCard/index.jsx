import { useDispatch, useSelector } from 'react-redux'
import { setFavorites } from '../../../slices/pokemonSlices'
import { CardHeader } from './cardHeader'
import { CardImg } from './cardImg'
import { CardType } from './cardType'
import heartChecked from '../../../icons/heartChecked.png'
import heartUnchecked from '../../../icons/heartUnchecked.png'
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
  const favoritesPokemons = useSelector(state => state.pokemons.favoritesPokemons)
  const dispatch = useDispatch()
  let iconFavorite
  let isFavorite
  let doSomthingToFavorites

  const addToFavorites = (pokemon) => {
    const newFavoritesPokemons = [...favoritesPokemons, pokemon]
    dispatch(setFavorites(newFavoritesPokemons))
  }
  const removeToFavorites = (pokemon) => {
    const pokemonIndex = favoritesPokemons.findIndex(favoritePokemon => pokemon.id === favoritePokemon.id)
    const newFavoritesPokemons = [...favoritesPokemons]
    newFavoritesPokemons.splice(pokemonIndex, 1)
    dispatch(setFavorites(newFavoritesPokemons))
  }

  if (favoritesPokemons.length > 0) {
    isFavorite = favoritesPokemons.find(pokemonFavorite => pokemon.id === pokemonFavorite.id)
  }

  if (typeof isFavorite === 'undefined') {
    iconFavorite = <img src={heartUnchecked} alt='heart' />
    doSomthingToFavorites = addToFavorites
  } else {
    iconFavorite = <img src={heartChecked} alt='heart' />
    doSomthingToFavorites = removeToFavorites
  }

  return (
    <div className={typeColors[pokemon.color]}>
      <CardHeader
        pokemon={pokemon}
        addToFavorites={addToFavorites}
        doSomthingToFavorites={doSomthingToFavorites}
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