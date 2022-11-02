import heart from '../../icons/heartChecked.png'

export function BtnFavoritesPokemons({ count, toggleFavorites, stateModal }) {
  let position
  stateModal
    ? position = "top-5"
    : position = "bottom-5"
  return (
    <div className={`fixed flex justify-center  right-5 w-[60px] h-[60px] bg-slate-200 
    cursor-pointer hover:bg-slate-300 dark:bg-gray-900 rounded-full dark:hover:bg-gray-800 ${position} transition-all`} onClick={toggleFavorites}>
      {(count > 0)
        ? <p className='absolute flex justify-center items-center w-[30px] h-[30px] top-[-10px] p-[5px] right-0 bg-slate-200  dark:text-white dark:bg-gray-700 rounded-full font-bold'>{count}</p>
        : null
      }
      <img className='self-center' src={heart} alt="favorites-pokemons" />
    </div>
  )
}