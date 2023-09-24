import './style.css'
import { useMediaQuery } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { MAIN_NAV_ICONS } from './components/SVGIcons'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'

export default function App () {
  const lgScreen = useMediaQuery('(min-width:768px)')

  const NAV_ITEMS = ['home', 'products', 'blog', 'about']
    .map(name => ({
      name,
      href: name === 'home' ? '/' : `/${name}`,
      icon: MAIN_NAV_ICONS[name]
    }))
  const ROUTES_ELEMENTS = {
    home: <HomePage />,
    products: <ProductsPage />
  }

  return (
    <Layout navItems={NAV_ITEMS}>
      <div style={{ marginTop: lgScreen ? 160 : 100 }}>
        <Routes>
          {NAV_ITEMS.map(item => (
            <Route key={item.href} path={item.href} element={ROUTES_ELEMENTS[item.name]} />
          ))}
        </Routes>
      </div>
    </Layout>
  )
}
