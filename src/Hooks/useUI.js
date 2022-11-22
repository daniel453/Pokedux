import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShowModal } from '../slices/uiSlices'
import { usePokemons } from './usePokemons'
import heartChecked from '../icons/heartChecked.png'
import heartUnchecked from '../icons/heartUnchecked.png'

export const useUI = (pokemon) => {
  const loading = useSelector(state => state.ui.loading)
  const showModal = useSelector(state => state.ui.showModal)
  const navigation = useSelector(state => state.pokemons.navigation)
  const dispatch = useDispatch()
  let iconFavorite
  let isFavorite
  let doSomthingToFavorites

  const {
    favoritesPokemons,
    addToFavorites,
    removeToFavorites
  } = usePokemons()

  const toggleFavorites = () => {
    dispatch(setShowModal(!showModal))
  }

  const getAction = (pokemon) => {
    if (favoritesPokemons.length > 0) {
      isFavorite = favoritesPokemons.find(pokemonFavorite => pokemon.id === pokemonFavorite.id)
    }

    if (typeof isFavorite === 'undefined') {
      iconFavorite = heartUnchecked
      doSomthingToFavorites = addToFavorites
    } else {
      iconFavorite = heartChecked
      doSomthingToFavorites = removeToFavorites
    }

    return { doSomthingToFavorites, iconFavorite }
  }

  return {
    loading,
    showModal,
    navigation,
    iconFavorite,
    toggleFavorites,
    getAction,
  }
}