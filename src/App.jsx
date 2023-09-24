import './style.css'
import { Route, Routes } from 'react-router-dom'
import { MAIN_NAV_ICONS } from './components/SVGIcons'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'

export default function App () {
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
      <Routes>
        {NAV_ITEMS.map(item => (
          <Route key={item.name} path={item.href} element={ROUTES_ELEMENTS[item.name]} />
        ))}
      </Routes>
    </Layout>
  )
}
