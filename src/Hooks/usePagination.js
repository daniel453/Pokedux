import { useState } from "react"
import { useSelector } from "react-redux"

export function usePagination() {
  const totalPages = useSelector(state => state.pokemons.navigation.totalPages)
  const [pageState, setPagestate] = useState(1)

  const handleNextPage = (url, callback) => {
    if (pageState < totalPages) {
      let page = pageState + 1
      setPagestate(page)
      callback(url)
    }
  }
  const handlePrevPage = (url, callback) => {
    if (pageState > 1) {
      let page = pageState - 1
      setPagestate(page)
      callback(url)
    }
  }
  const handlePage = (pageI, callback, page) => {
    let offset = pageI * 20
    let composeURL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    setPagestate(page)
    callback(composeURL)
  }

  return {
    handlePage,
    handleNextPage,
    handlePrevPage,
    handlePage,
    pageState,
    totalPages
  }
}