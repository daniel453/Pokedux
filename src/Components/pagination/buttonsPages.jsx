export function ButtonPages({ handlePage, totalPages, getMorePokemons, page, loading }) {
  let initialButtons = []
  let middleButtons = []
  let endButtons = []

  if (page < 6) {
    initialButtons = [1, 2, 3, 4, 5, 6, 7, 8]
    endButtons = [totalPages - 2, totalPages - 1, totalPages]
  }
  if (page >= 6) {
    initialButtons = [1, 2, 3]
    middleButtons = [page - 2, page - 1, page, page + 1, page + 2]
    endButtons = [totalPages - 2, totalPages - 1, totalPages]
  }
  if (page + 3 >= totalPages - 3) {
    initialButtons = [1, 2, 3]
    middleButtons = [page - 2, page - 1]
    endButtons = []
    for (let index = page; index <= totalPages; index++) {
      middleButtons.push(index);
    }
  }

  if (!loading) {
    return (
      <div className="hidden items-center w-10/12 justify-center box-border md:flex">
        <div className="flex text-center after:ml-1 md:after:ml-3">
          {
            initialButtons.length > 0
              ? initialButtons.map((n) => (
                <button
                  className={
                    page == n
                      ? "px-4 py-2 text-gray-500 border-t-2 border-t-fuchsia-800 font-medium text-md dark:text-fuchsia-700"
                      : "px-4 py-2 text-gray-500 font-medium text-md dark:text-white border-2 border-transparent hover:hover:border-fuchsia-800"
                  }
                  key={`initial${n}`}
                  onClick={() => handlePage(n - 1, getMorePokemons, n)}
                >
                  {n}
                </button>
              ))
              : null

          }
        </div>
        <div className="flex ml-3 text-center after:ml-1 md:after:ml-3">
          {
            middleButtons.length > 0
              ? middleButtons.map((n) => (
                <button
                  className={
                    page == n
                      ? "px-4 py-2 text-gray-500 border-t-2 border-t-fuchsia-800 font-medium text-md dark:text-fuchsia-700"
                      : "px-4 py-2 text-gray-500 font-medium text-md dark:text-white border-2 border-transparent hover:hover:border-fuchsia-800"
                  }
                  key={`initial${n}`}
                  onClick={() => handlePage(n - 1, getMorePokemons, n)}
                >
                  {n}
                </button>
              ))
              : null

          }
        </div>
        <div className="flex  ml-3 text-center after:ml-1 md:after:ml-3">
          {
            endButtons.length > 0
              ? endButtons.map((n) => (
                <button
                  className={
                    page == n
                      ? "px-4 py-2 text-gray-500 border-t-2 border-t-fuchsia-800 font-medium text-md dark:text-fuchsia-700"
                      : "px-4 py-2 text-gray-500 font-medium text-md dark:text-white border-2 border-transparent hover:hover:border-fuchsia-800"
                  }
                  key={`initial${n}`}
                  onClick={() => handlePage(n - 1, getMorePokemons, n)}
                >
                  {n}
                </button>
              ))
              : null
          }
        </div>
      </div>
    )
  } else {
    return (<p className="text-gray-500 dark:text-white animate-pulse">Cargando...</p>)
  }
}