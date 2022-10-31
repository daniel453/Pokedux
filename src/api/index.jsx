import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setPokemons } from "../slices/pokemonSlices";
import { setLoading } from "../slices/uiSlices";

const getPokemons = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(res => res.data)
    .catch(error => console.error(error))
}

const getPokemonsDetails = pokemon => {
  return axios.get(pokemon.url)
    .then(res => res.data)
    .catch(error => console.error(error))
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'pokemonsSlices/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true))
    let pokemonsRes = await getPokemons()
    let pokemonsDetails = await Promise.all(
      pokemonsRes.results.map(pokemon => getPokemonsDetails(pokemon))
    )
    dispatch(setPokemons(pokemonsDetails))
    dispatch(setLoading(false))
  }
)

export { getPokemons, getPokemonsDetails }