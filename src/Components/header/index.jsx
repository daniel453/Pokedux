import { BtnDarkmode } from '../btnDarkmode'
function HeaderComponent() {
  return (
    <header className="flex justify-between items-center box-border p-4 border-b-2 border-b-slate-100 dark:bg-gray-900 dark:border-none dark:transition-colors transition-colors">
      <h2 className="text-3xl text-fuchsia-700 font-extrabold sm:text-5xl">POKEDUX</h2>
      <BtnDarkmode />
    </header>
  )
}

export { HeaderComponent }