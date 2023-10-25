import { Link, Stack, Typography } from '@mui/material'
import { APP_NAME, LAYOUT_FOOTER_ATTRIBUTION } from '../constants/strings'
import LayoutHeader from './LayoutHeader'
import { LOGO_ICON } from './SVGIcons'

const Layout = ({ children }) =>
  <>
    <LayoutHeader />
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

export default Layout
