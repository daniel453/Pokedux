export function BtnNextPrevious({ navigation, loading, getMorePokemons }) {
  console.log(getMorePokemons)
  return (
    <section className="flex w-full box-border items-center justify-between px-10 my-4 font-bolder text-md text-white">
      <button className="p-2 bg-fuchsia-700 rounded-md transition-colors hover:bg-fuchsia-800 disabled:bg-fuchsia-700/30 disabled:dark:text-white/30"
        disabled={
          (loading || navigation.previous === null)
            ? true
            : false
        }
        onClick={() => getMorePokemons(navigation.previous)}
      >
        Anterior
      </button>
      <p>{`Total: ${navigation.count}`}</p>
      <button className="p-2 bg-fuchsia-700 rounded-md transition-colors hover:bg-fuchsia-800 disabled:bg-fuchsia-700/30 disabled:dark:text-white/30"
        disabled={
          (loading || navigation.next === null)
            ? true
            : false
        }
        onClick={() => getMorePokemons(navigation.next)}
      >
        Siguiente
      </button>
    </section>
  )
}