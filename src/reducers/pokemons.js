import { SET_FAVORITES, SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: [],
  favoritesPokemons: [],
}

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload }
    case SET_FAVORITES:
      return { ...state, favoritesPokemons: action.payload }
    default:
      return state
  }
}