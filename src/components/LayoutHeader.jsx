import { Stack, useMediaQuery } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { APP_NAME } from '../constants/strings'
import { AuthContext } from '../contexts/auth-context'
import AuthButton from './AuthButton'
import CartButton from './CartButton'
import NavigationMenu from './NavigationMenu'
import { LOGO_ICON, MAIN_NAV_ICONS } from './SVGIcons'
import UserMenu from './UserMenu'

export default function LayoutHeader () {
  const { user } = useContext(AuthContext)

  const lgScreen = useMediaQuery('(min-width:910px)')

  const navItems = ['home', 'products']
    .map(name => ({
      name,
      href: name === 'home' ? '/' : `/${name}`,
      icon: MAIN_NAV_ICONS[name]
    }))

  const UserAuthComponent = user != null ? <UserMenu /> : <AuthButton />

  return (
    <Stack component='header' direction='row' justifyContent='space-between' alignItems='center' sx={{ position: 'fixed', top: 0, width: '100%', p: 3, backgroundColor: 'rgba(0,0,0,.4)' }}>
      <Link to='/' title={APP_NAME}>{LOGO_ICON()}</Link>
      <Stack direction='row' component='span' alignItems='center'>
        {lgScreen
          ? <>
              <NavigationMenu navItems={navItems} />
              <CartButton />
              {UserAuthComponent}
            </>
          : <>
              <CartButton />
              {UserAuthComponent}
              <NavigationMenu navItems={navItems} />
            </>}
      </Stack>
    </Stack>
  )
}
