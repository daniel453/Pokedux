
const PokemonCard = ({ pokemon }) => {
  return (
    <div className="flex flex-col box-border p-5 border border-gray-400 rounded-md">
      <h3 className="text-xl font-semibold">{pokemon.name}</h3>
      <div className="w-[150px] min-h-[150px] my-5 rounded-full bg-gray-400 self-center flex justify-center">
        <img src="asd" alt={pokemon.name} />
      </div>
      <div className="flex gap-2 justify-center">
        <p className="p-1 text-sm border-2 border-gray-400 rounded-md">Example</p>
        <p className="p-1 text-sm border-2 border-gray-400 rounded-md">Example</p>
      </div>
    </div>
  )
}

export { PokemonCard }