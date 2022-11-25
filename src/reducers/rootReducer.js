import { combineReducers } from 'redux'
import pokemonSlices from '../slices/pokemonSlices'
import uiSlices from '../slices/uiSlices'

export const rootReducers = combineReducers({
  pokemons: pokemonSlices,
  ui: uiSlices
})