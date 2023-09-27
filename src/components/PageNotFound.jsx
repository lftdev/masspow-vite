import { Link, Typography } from '@mui/material'
import { Link as RLink } from 'react-router-dom'

const PageNotFound = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant='h1'>Error 404: not found</Typography>
    <Link to='/' component={RLink}>Take me home</Link>
  </div>
)

export default PageNotFound
