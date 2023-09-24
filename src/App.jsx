import './style.css'
import { Link, Stack, Typography, useMediaQuery } from '@mui/material'
import { LOGO_ICON, MAIN_NAV_ICONS } from './components/SVGIcons'
import NavigationMenu from './components/NavigationMenu'
import CartButton from './components/CartButton'
import { Route, Routes } from 'react-router-dom'
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
    <>
      <Stack component='header' direction='row' justifyContent='space-between' alignItems='center' sx={{ position: 'fixed', top: 0, width: '100%', p: 3 }}>
        {LOGO_ICON()}
        <Stack direction='row' component='span' alignItems='center'>
          <NavigationMenu navItems={NAV_ITEMS} />
          <CartButton />
        </Stack>
      </Stack>
      <div style={{ marginTop: lgScreen ? 160 : 100 }}>
        <Routes>
          {NAV_ITEMS.map(item => (
            <Route key={item.name} path={item.href} element={ROUTES_ELEMENTS[item.name]} />
          ))}
        </Routes>
      </div>
      <Stack component='footer' gap={5} justifyContent='center' alignItems='center' style={{ gridRow: 'last', paddingBottom: 10, backgroundColor: '#8d8fe9', borderTopRightRadius: '72px' }}>
        <Stack direction='row' gap={5} justifyContent='flex-start' alignItems='center'>
          {LOGO_ICON(96, 96)}
          <Typography variant='h6' sx={{ fontStyle: 'italic' }}>masspow</Typography>
        </Stack>
        <div>
          <Typography variant='button'>Designed and developed by <Link href='https://github.com/lftdev' target='_blank' underline='none' rel='noopener'>lftdev</Link>
          </Typography>
        </div>
      </Stack>
    </>
  )
}
