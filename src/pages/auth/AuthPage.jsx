import { Button, Paper, Stack } from '@mui/material'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useContext } from 'react'
import { GOOGLE_ICON } from '../../components/SVGIcons'
import { AuthContext } from '../../contexts/auth-context'

export default function AuthPage () {
  const { setUser } = useContext(AuthContext)

  function signIn () {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    auth.useDeviceLanguage()

    signInWithPopup(auth, provider)
      .then(result => {
        setUser(result.user)
      }).catch(error => {
        console.error('Error occurred while signing in.', error.code, error.message)
        // The AuthCredential type that was used.
        GoogleAuthProvider.credentialFromError(error)
      })
  }

  return (
    <Stack alignItems='center' sx={{ marginTop: 20 }}>
      <Paper sx={{ p: 2 }}>
        <h1>Sign In</h1>
        <Button startIcon={GOOGLE_ICON} variant='contained' onClick={signIn}>Sign in with Google</Button>
      </Paper>
    </Stack>
  )
}
