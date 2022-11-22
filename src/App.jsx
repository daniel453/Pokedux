import React, { useEffect } from "react"
import { HeaderComponent } from "./Components/header"
import { PokemonList } from "./Components/pokemonList"
import { BtnFavoritesPokemons } from "./Components/btnFavoritesPokemons"
import { FavoritesPokemons } from "./Components/favoritesPokemons"
import { Pagination } from "./Components/pagination"
import { usePokemons } from "./Hooks/usePokemons"
import { useUI } from "./Hooks/useUI"

function App() {
  const {
    pokemons,
    favoritesPokemons,
    getMorePokemons,
    getInitialPokemons
  } = usePokemons()
  const {
    loading,
    showModal,
    navigation,
    toggleFavorites
  } = useUI()

  useEffect(() => {
    getInitialPokemons()
  }, [])
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
