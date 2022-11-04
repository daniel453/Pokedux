import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  favoritesPokemons: [],
  navigation: {
    next: null,
    previous: null,
    count: null,
    totalPages: 0,
    page: 1,
  }
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
    },
    setNavigation: (state, action) => {
      state.navigation = action.payload
    }
  }
})



export const { setPokemons, setFavorites, setNavigation } = pokemonSlice.actions

export default pokemonSlice.reducer