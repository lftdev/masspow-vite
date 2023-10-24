import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import PageNotFound from './components/PageNotFound'
import { AuthContextProvider } from './contexts/auth-context'
import { CartProvider } from './contexts/cart-context'
import { FilterProvider } from './contexts/filter-context'
import AuthPage from './pages/auth/AuthPage'
import HomePage from './pages/home/HomePage'
import ProductDetailPage from './pages/products/ProductDetailPage'
import ProductsPage from './pages/products/ProductsPage'
import './style.css'

export default function App () {
  const routes = [
    { name: 'home', element: <HomePage />, path: '/' },
    { name: 'products', element: <FilterProvider><ProductsPage /></FilterProvider>, path: '/products' },
    { name: 'productDetails', element: <ProductDetailPage />, path: '/products/:productId' },
    { name: 'auth', element: <AuthPage />, path: '/auth' },
    { name: '*', element: <PageNotFound />, path: '*' }
  ]

  return (
    <CartProvider>
      <AuthContextProvider>
        <Layout>
          <Routes>
            {routes.map(route => (
              <Route key={route.name} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Layout>
      </AuthContextProvider>
    </CartProvider>
  )
}
