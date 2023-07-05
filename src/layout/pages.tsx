import { Outlet } from 'react-router-dom'
import { HeaderPages } from '../components/Header'

export function HeaderPagesLayout() {
  return (
    <>
      <HeaderPages />
      <Outlet />
    </>
  )
}
