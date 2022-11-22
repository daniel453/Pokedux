import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemonsWithDetails } from '../api'
import { setFavorites } from '../slices/pokemonSlices'

export const usePokemons = () => {
  const pokemons = useSelector(state => state.pokemons.pokemons)
  const favoritesPokemons = useSelector(state => state.pokemons.favoritesPokemons)
  const dispatch = useDispatch()

  const getInitialPokemons = () => {
    dispatch(fetchPokemonsWithDetails("https://pokeapi.co/api/v2/pokemon?limit=20"))
  }

  const getMorePokemons = url => {
    if (url !== null) {
      dispatch(fetchPokemonsWithDetails(url))
    }
  }

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
  return {
    pokemons,
    favoritesPokemons,
    getMorePokemons,
    getInitialPokemons,
    addToFavorites,
    removeToFavorites
  }
}