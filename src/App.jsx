import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import PageNotFound from './components/PageNotFound'
import { FilterProvider } from './contexts/filter-context'
import HomePage from './pages/home/HomePage'
import ProductsPage from './pages/products/ProductsPage'
import './style.css'

export default function App () {
  const routes = [
    { name: 'home', element: <HomePage />, path: '/' },
    { name: 'products', element: <FilterProvider><ProductsPage /></FilterProvider>, path: '/products' },
    { name: '*', element: <PageNotFound />, path: '*' }
  ]

  return (
    <Layout>
      <Routes>
        {routes.map(route => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Layout>
  )
}
