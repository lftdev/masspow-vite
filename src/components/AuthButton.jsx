import { Avatar, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

const AuthButton = () =>
  <Button to='/auth' component={Link}>
    <Stack direction='row' alignItems='center' gap={1}>
      <>
        Sign In
        <Avatar alt='No user' />
      </>
    </Stack>
  </Button>

export default AuthButton
