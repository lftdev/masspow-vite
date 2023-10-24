import { Avatar, Link, Stack, Typography, useMediaQuery } from '@mui/material'
import { useContext } from 'react'
import { Link as RLink } from 'react-router-dom'
import { APP_NAME, LAYOUT_FOOTER_ATTRIBUTION } from '../constants/strings'
import { AuthContext } from '../contexts/auth-context'
import CartButton from './CartButton'
import NavigationMenu from './NavigationMenu'
import { LOGO_ICON, MAIN_NAV_ICONS } from './SVGIcons'

export default function Layout (props) {
  const { children } = props
  const { user } = useContext(AuthContext)

  const lgScreen = useMediaQuery('(min-width:768px)')

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
          {lgScreen
            ? <>
                <NavigationMenu navItems={navItems} />
                <CartButton />
                <Avatar alt='Remy Sharp'>{user.displayName[0]}</Avatar>
              </>
            : <>
                <CartButton />
                <NavigationMenu navItems={navItems} />
                <Avatar alt='Remy Sharp'>{user?.displayName[0]}</Avatar>
              </>}
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
