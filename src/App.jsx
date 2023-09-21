import './style.css'
import { Link, Stack, Typography, useMediaQuery } from '@mui/material'
import { LOGO_ICON, MAIN_NAV_ICONS } from './components/SVGIcons'
import NavigationMenu from './components/NavigationMenu'
import CartButton from './components/CartButton'
import ProductPreview from './components/ProductPreview'

export default function App () {
  const lgScreen = useMediaQuery('(min-width:768px)')

  const NAV_ITEMS = [
    { name: 'Home', href: '/', icon: MAIN_NAV_ICONS.home },
    { name: 'Products', href: '/products', icon: MAIN_NAV_ICONS.products },
    { name: 'Blog', href: '/blog', icon: MAIN_NAV_ICONS.blog },
    { name: 'About us', href: '/about', icon: MAIN_NAV_ICONS.info }
  ]

  const PRODUCTS = [
    { id: 1, name: 'Protein', variant: 'whey', price: 12, brand: 'Gold Standard', key_name: 'protein-whey-gold_standard', stock: 10 },
    { id: 2, name: 'Creatine', variant: 'whey', price: 20, brand: 'IDN', key_name: 'creatine-monohydrate-idn', stock: 50 },
    { id: 3, name: 'C4 Preworkout', variant: null, price: 10, brand: 'Cellucor', key_name: 'preworkout-c4-cellucor', stock: 20 }
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
        <Stack direction='row' component='main' justifyContent='center' alignItems='center' gap={5} flexWrap='wrap'>
          {PRODUCTS.map(product => (
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
