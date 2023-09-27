import './style.css'
import { Route, Routes } from 'react-router-dom'
import { MAIN_NAV_ICONS } from './components/SVGIcons'
import Layout from './components/Layout'
import HomePage from './pages/home/HomePage'
import ProductsPage from './pages/products/ProductsPage'
import { FilterProvider } from './contexts/filter-context'
import PageNotFound from './components/PageNotFound'

export default function App () {
  const NAV_ITEMS = ['home', 'products', 'blog', 'about']
    .map(name => ({
      name,
      href: name === 'home' ? '/' : `/${name}`,
      icon: MAIN_NAV_ICONS[name]
    }))
  const ROUTES = [
    { name: 'home', element: <HomePage />, path: '/' },
    { name: 'products', element: <FilterProvider><ProductsPage /></FilterProvider>, path: '/products' },
    { name: '*', element: <PageNotFound />, path: '*' }
  ]

  return (
    <Layout navItems={NAV_ITEMS}>
      <Routes>
        {ROUTES.map(route => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Layout>
  )
}
