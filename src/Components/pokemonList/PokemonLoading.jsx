function PokemonLoading() {
  return (
    <div className=" flex relative flex-col w-[300px] min-h-[300px] box-border p-5 border border-gray-400 rounded-md transition-all hover:scale-105 animate-appearItems"
    >
      <div className="bg-slate-400 w-1/2 min-h-[25px] animate-pulse"></div>
      <div className="flex justify-center w-[180px] min-h-[180px] my-5 rounded-full bg-gray-400 self-center animate-pulse"></div>
      <div className="bg-slate-400 w-1/2 min-h-[25px] animate-pulse"></div>
      <div className=" grid grid-cols-1 gap-2 justify-center mt-4 sm:grid-cols-2">
        <div className="bg-slate-400 w-full min-h-[25px] animate-pulse"></div>
        <div className="bg-slate-400 w-full min-h-[25px] animate-pulse"></div>
      </div>
    </div>
  )
}

export { PokemonLoading }