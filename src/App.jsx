import React, { useEffect } from "react"
import { Searcher } from "./Components/Searcher"
import { PokemonList } from "./Components/PokemonList"
import { connect } from 'react-redux'
import { setPokemons as setPokemonsActions } from "./actions"
import { getPokemons } from "./api"

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
})

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
})

function App({ pokemons, setPokemons }) {

  useEffect(() => {
    const fetchPokemons = async () => {
      let pokemonsRes = await getPokemons()
      setPokemons(pokemonsRes)
    }

    fetchPokemons()
  }, [])

  return (
    <React.Fragment>
      <header className="flex flex-col items-center box-border p-4">
        <h2 className="text-3xl text-fuchsia-700 font-extrabold mb-4 sm:text-5xl">POKEDUX</h2>
        <Searcher />
      </header>
      <PokemonList pokemons={pokemons} />
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


/*
  mapStateToProps:
    es una función recibe nuestro estado y retorna un objeto cuyas propiedades van a ser enviadas a las props del componente que se está conectado a redux.

  mapDispatchToProps:
    es una función que recibe el dispatcher de redux y retorna un objeto que será mapedo a las propiedades con los action creators
*/