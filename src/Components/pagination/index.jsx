import { usePagination } from "../../Hooks/usePagination"
import { ButtonPages } from "./buttonsPages"

export function Pagination({ navigation, loading, getMorePokemons }) {
  const {
    handleNextPage,
    handlePage,
    handlePrevPage,
    totalPages,
    pageState
  } = usePagination()

  return (
    <section className="flex w-full box-border items-center justify-between p-5 font-bolder text-md text-white transition-all">
      <button className="text-gray-500 font-medium border-b-2 border-b-transparent text-md hover:border-b-fuchsia-700 hover:text-fuchsia-700 dark:text-white dark:hover:text-fuchsia-700 transition-all disabled:text-gray-500/50 dark:disabled:text-gray-500/50  "
        disabled={
          (loading || navigation.previous === null)
            ? true
            : false
        }
        onClick={() => handlePrevPage(navigation.previous, getMorePokemons)}
      >
        Anterior
      </button>
      <ButtonPages handlePage={handlePage} totalPages={totalPages} getMorePokemons={getMorePokemons} page={pageState} />
      <button className="text-gray-500 font-medium border-b-2 border-b-transparent text-md hover:border-b-fuchsia-700 hover:text-fuchsia-700 dark:text-white dark:hover:text-fuchsia-700 transition-all disabled:text-gray-500/50 dark:disabled:text-gray-500/50  "
        disabled={
          (loading || navigation.next === null)
            ? true
            : false
        }
        onClick={() => handleNextPage(navigation.next, getMorePokemons)}
      >
        Siguiente
      </button>
    </section>
  )
}