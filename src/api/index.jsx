import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setNavigation, setPokemons } from "../slices/pokemonSlices";
import { setLoading } from "../slices/uiSlices";

const getPokemons = url => {
  return axios.get(url)
    .then(res => res.data)
    .catch(error => console.error(error))
}

const getPokemonsDetails = pokemon => {
  return axios.get(pokemon.url)
    .then(res => res.data)
    .catch(error => console.error(error))
}
const getpokemonsColor = url => {
  return axios.get(url)
    .then(res => res.data)
    .catch(res => console.error(res))
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'pokemonsSlices/fetchPokemonsWithDetails',
  async (url, { dispatch }) => {
    let navigation
    dispatch(setLoading(true))

    let pokemonsRes = await getPokemons(url)
    let pokemonsDetails = await Promise.all(
      pokemonsRes.results.map(pokemon => getPokemonsDetails(pokemon))
    )
    let pokemon = await Promise.all(
      pokemonsDetails.map(pokemon =>
        getpokemonsColor(pokemon.species.url)
          .then(res => ({ ...pokemon, color: res.color.name }))
      )
    )

    navigation = {
      next: pokemonsRes.next,
      previous: pokemonsRes.previous,
      count: pokemonsRes.count,
      totalPages: Math.ceil(pokemonsRes.count / 20)
    }
    dispatch(setNavigation(navigation))
    dispatch(setPokemons(pokemon))
    dispatch(setLoading(false))
  }
)

export { getPokemons, getPokemonsDetails }