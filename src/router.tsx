import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Europa } from './pages/europa'
import { HeaderPagesLayout } from './layout/pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<HeaderPagesLayout />}>
        <Route path="/europa" element={<Europa />} />
      </Route>
    </Routes>
  )
}
