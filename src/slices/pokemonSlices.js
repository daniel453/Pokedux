import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  favoritesPokemons: [],
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setFavorites: (state, action) => {
      state.favoritesPokemons = action.payload
    }
  }
})



export const { setPokemons, setFavorites } = pokemonSlice.actions

export default pokemonSlice.reducer