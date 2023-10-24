import { Avatar, Button, Stack, useMediaQuery } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/auth-context'

export default function AuthButton () {
  const { user } = useContext(AuthContext)

  const lgScreen = useMediaQuery('(min-width:1000px)')

  return (
    <Button to='/auth' component={Link}>
      <Stack direction='row' alignItems='center' gap={1}>
        {user != null
          ? <>
              {lgScreen ? user.displayName : ''}
              <Avatar alt={user.displayName}>{user.displayName[0]}</Avatar>
            </>
          : <>
              Sign In
              <Avatar alt='No user' />
            </>}
      </Stack>
    </Button>
  )
}
