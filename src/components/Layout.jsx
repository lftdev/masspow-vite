import { Link, Stack, Typography, useMediaQuery } from '@mui/material'
import { LOGO_ICON } from './SVGIcons'
import NavigationMenu from './NavigationMenu'
import CartButton from './CartButton'

export default function Layout (props) {
  const { children, navItems } = props
  const lgScreen = useMediaQuery('(min-width:768px)')

  return (
    <>
      <Stack component='header' direction='row' justifyContent='space-between' alignItems='center' sx={{ position: 'fixed', top: 0, width: '100%', p: 3 }}>
        {LOGO_ICON()}
        <Stack direction='row' component='span' alignItems='center'>
          <NavigationMenu navItems={navItems} />
          <CartButton />
        </Stack>
      </Stack>
      <div style={{ marginTop: lgScreen ? 160 : 100 }}>
        {children}
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
