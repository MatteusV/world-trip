import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import arrow from '../assets/europa/arrowLeft.svg'
export function Header() {
  return (
    <header className="p-3 pt-1 bg-[#e9ffe1] w-screen h-12 flex justify-center items-center">
      <img src={logo} alt="" />
    </header>
  )
}

export function HeaderPages() {
  return (
    <header className="p-3 pt-1 bg-[#e9ffe1] w-screen h-12 flex justify-between items-center">
      <NavLink to="/">
        <img src={arrow} alt="" />
      </NavLink>
      <img src={logo} alt="" />
      <button className="invisible"></button>
    </header>
  )
}
