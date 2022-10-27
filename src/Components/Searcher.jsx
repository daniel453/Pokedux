import searchIcon from '../icons/Search.png'

const Searcher = () => {
  return (
    <div
      className={searcherCont}
    >
      <img
        className={searcherImg}
        src={searchIcon}
      />
      <input
        className={searcherInput}
        type="text"
        placeholder="Buscar..." />
    </div>
  )
}

const searcherCont = `
  relative
  shadow-sm
  w-full
  max-w-lg
  `
const searcherImg = `
  absolute
  w-8 
  h-6 
  top-0
  bottom-0
  m-auto
  pl-2
`
const searcherInput = `
  block 
  w-full 
  rounded-sm
  border-2
  border-gray-400 
  pl-9
  py-2
  outline-none
  transition-all

  placeholder:font-semibold

  focus:box-border
  focus:border-blue-500
  focus:shadow-sm
  focus:shadow-blue-300

  sm:text-md
`


export { Searcher }