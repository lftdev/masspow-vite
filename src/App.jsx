import './style.css'
import { CircularProgress, Link, Stack, Typography, useMediaQuery } from '@mui/material'
import { LOGO_ICON, MAIN_NAV_ICONS } from './components/SVGIcons'
import NavigationMenu from './components/NavigationMenu'
import CartButton from './components/CartButton'
import ProductPreview from './components/ProductPreview'
import { useEffect, useState } from 'react'
import fetchProducts from './get-products'

export default function App () {
  const [products, setProducts] = useState([])
  const lgScreen = useMediaQuery('(min-width:768px)')

  useEffect(() => {
    fetchProducts().then(res => setProducts(res))
  }, [])

  const NAV_ITEMS = [
    { name: 'Home', href: '/', icon: MAIN_NAV_ICONS.home },
    { name: 'Products', href: '/products', icon: MAIN_NAV_ICONS.products },
    { name: 'Blog', href: '/blog', icon: MAIN_NAV_ICONS.blog },
    { name: 'About us', href: '/about', icon: MAIN_NAV_ICONS.info }
  ]

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
        <Stack direction='row' component='main' justifyContent='center' alignItems='center' gap={5} flexWrap='wrap' sx={{ height: '100%' }}>
          {products.length === 0
            ? <CircularProgress />
            : products.map(product => (
              <ProductPreview product={product} key={product.id}/>
            ))}
        </Stack>
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
