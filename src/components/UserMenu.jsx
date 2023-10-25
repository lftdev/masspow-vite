import { Avatar, Button, List, ListItem, ListItemButton, ListItemIcon, Popover, Stack, useMediaQuery } from '@mui/material'
import { getAuth, signOut } from 'firebase/auth'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../contexts/auth-context'
import { LOGOUT_ICON } from './SVGIcons'

export default function UserMenu () {
  const { user, setUser } = useContext(AuthContext)

  const lgScreen = useMediaQuery('(min-width:1000px)')

  const [popoverOpen, setPopoverOpen] = useState(false)

  const anchorBtn = useRef(null)

  const handleInteraction = () => setPopoverOpen(!popoverOpen)

  function logout () {
    signOut(getAuth())
    setUser(undefined)
    handleInteraction()
  }

  return (
    <>
      <Button onClick={handleInteraction} ref={anchorBtn}>
        <Stack direction='row' alignItems='center' gap={1}>
          <>
            {lgScreen ? user.displayName : ''}
            <Avatar alt={user.displayName}>{user.displayName[0]}</Avatar>
          </>
        </Stack>
      </Button>
      <Popover
        open={popoverOpen}
        onClose={handleInteraction}
        anchorEl={anchorBtn.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}>
        <List>
          <ListItem>
            <ListItemButton onClick={logout}>
              <ListItemIcon sx={{ width: 24 }}>
                {LOGOUT_ICON}
              </ListItemIcon>
              LOGOUT
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </>
  )
}
