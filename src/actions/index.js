import { getPokemonsDetails } from "../api";
import { SET_FAVORITES, SET_LOADING, SET_POKEMONS } from "./types";

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
})
const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
})
const setFavorites = (payload) => ({
  type: SET_FAVORITES,
  payload
})

const getPokemonsWithDetails =
  (pokemons = []) =>
    async (dispatch) => {
      let pokemonsDetails = await Promise.all(
        pokemons.results.map(pokemon => getPokemonsDetails(pokemon))
      )
      dispatch(setPokemons(pokemonsDetails))
      dispatch(setLoading(false))
    }

export { setFavorites, setPokemons, getPokemonsWithDetails, setLoading }