import React, { useEffect } from "react"
import { HeaderComponent } from "./Components/header"
import { PokemonList } from "./Components/pokemonList"
import { BtnFavoritesPokemons } from "./Components/btnFavoritesPokemons"
import { fetchPokemonsWithDetails } from "./api"
import { useDispatch, useSelector } from "react-redux"
import { setShowModal } from "./slices/uiSlices"
import { FavoritesPokemons } from "./Components/favoritesPokemons"
import { Pagination } from "./Components/pagination"

function App() {
  const pokemons = useSelector(state => state.pokemons.pokemons)
  const favoritesPokemons = useSelector(state => state.pokemons.favoritesPokemons)
  const loading = useSelector(state => state.ui.loading)
  const showModal = useSelector(state => state.ui.showModal)
  const navigation = useSelector(state => state.pokemons.navigation)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails("https://pokeapi.co/api/v2/pokemon?limit=20"))
  }, [])

  const getMorePokemons = url => {
    if (url !== null) {
      dispatch(fetchPokemonsWithDetails(url))
    }
  }
  const toggleFavorites = () => {
    dispatch(setShowModal(!showModal))
  }
  return (
    <React.Fragment>
      <HeaderComponent />
      <Pagination navigation={navigation} loading={loading} getMorePokemons={getMorePokemons} />

      <PokemonList pokemons={pokemons} loading={loading} />
      <BtnFavoritesPokemons
        count={favoritesPokemons.length}
        toggleFavorites={toggleFavorites}
        stateModal={showModal}
      />
      <FavoritesPokemons
        visible={showModal}
        favorites={favoritesPokemons}
      />
    </React.Fragment>
  )
}

export default App
