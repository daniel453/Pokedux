import React, { useEffect } from "react"
import { HeaderComponent } from "./Components/header"
import { PokemonList } from "./Components/pokemonList"
import { fetchPokemonsWithDetails } from "./api"
import { useDispatch, useSelector } from "react-redux"

// manipulando el estado con Connect:
// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// })

// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value))
// })

// function App({ pokemons, setPokemons }) 

// manipulando el estado con hooks de redux:

function App() {
  const pokemons = useSelector(state => state.pokemons.pokemons)
  const loading = useSelector(state => state.ui.loading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])

  return (
    <React.Fragment>
      <HeaderComponent />
      <PokemonList pokemons={pokemons} loading={loading} />
    </React.Fragment>
  )
}

export default App


/*
  mapStateToProps:
    es una función recibe nuestro estado y retorna un objeto cuyas propiedades van a ser enviadas a las props del componente que se está conectado a redux.

  mapDispatchToProps:
    es una función que recibe el dispatcher de redux y retorna un objeto que será mapedo a las propiedades con los action creators
*/