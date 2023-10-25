import { Link, Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { Link as RLink } from 'react-router-dom'
import { APP_NAME, LAYOUT_FOOTER_ATTRIBUTION } from '../constants/strings'
import { AuthContext } from '../contexts/auth-context'
import AuthButton from './AuthButton'
import CartButton from './CartButton'
import NavigationMenu from './NavigationMenu'
import { LOGO_ICON, MAIN_NAV_ICONS } from './SVGIcons'
import UserMenu from './UserMenu'

export default function Layout (props) {
  const { children } = props

  const { user } = useContext(AuthContext)

  const navItems = ['home', 'products', 'blog', 'about']
    .map(name => ({
      name,
      href: name === 'home' ? '/' : `/${name}`,
      icon: MAIN_NAV_ICONS[name]
    }))

  return (
    <>
      <Stack component='header' direction='row' justifyContent='space-between' alignItems='center' sx={{ position: 'fixed', top: 0, width: '100%', p: 3, backgroundColor: 'rgba(0,0,0,.4)' }}>
        <RLink to='/' title={APP_NAME}>{LOGO_ICON()}</RLink>
        <Stack direction='row' component='span' alignItems='center'>
          <>
            <NavigationMenu navItems={navItems} />
            <CartButton />
            {user != null ? <UserMenu /> : <AuthButton />}
          </>
        </Stack>
      </Stack>
      {children}
      <Stack component='footer' gap={5} justifyContent='center' alignItems='center' style={{ gridRow: 'last', paddingBottom: 10, backgroundColor: '#8d8fe9', borderTopRightRadius: '72px' }}>
        <Stack direction='row' gap={5} justifyContent='flex-start' alignItems='center'>
          {LOGO_ICON(96, 96)}
          <Typography variant='h6' sx={{ fontStyle: 'italic' }}>{APP_NAME}</Typography>
        </Stack>
        <div>
          <Typography variant='button'>{LAYOUT_FOOTER_ATTRIBUTION} <Link href='https://github.com/lftdev' target='_blank' underline='none' rel='noopener'>lftdev</Link>
          </Typography>
        </div>
      </Stack>
    </>
  )
}
