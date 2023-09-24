import { Button, Stack, Typography } from '@mui/material'
import { HOME_PAGE_STRINGS } from '../constants/strings'
import { Link } from 'react-router-dom'

const HomePage = () => (
  <section role='region' style={{ display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center', padding: 4, width: '100%', height: '100vh', background: 'url(/images/bg-hero.jpg) center center no-repeat', borderBottomLeftRadius: 72 }}>
    <Stack gap={10} sx={{ backgroundColor: 'rgba(0,0,0,.7)', borderBottomLeftRadius: 72, padding: 5 }}>
      <Stack component='header' gap={2}>
        <Typography variant='h2' component='h1'>{HOME_PAGE_STRINGS.mainTitle}</Typography>
        <Typography variant='h6'>{HOME_PAGE_STRINGS.mainDescription}</Typography>
      </Stack>
      <Stack component='footer' direction='row' sx={{ maxWidth: 500 }} gap={2}>
        <Button variant='contained'>{HOME_PAGE_STRINGS.callToAction}</Button>
        <Button to='/products' variant='outlined' color='secondary' component={Link}>{HOME_PAGE_STRINGS.secondaryAction}</Button>
      </Stack>
    </Stack>
  </section>
)
export default HomePage
