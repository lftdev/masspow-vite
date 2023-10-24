import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HEADER_ICONS } from './SVGIcons'

export default function NavigationMenu (props) {
  const { navItems } = props
  const [menuOpen, setMenuOpen] = useState(false)
  const lgScreen = useMediaQuery('(min-width:910px)')

  const closeMenu = () => setMenuOpen(false)

  const list = navItems.map((item, index) => (
    <ListItem key={index}>
      <ListItemIcon sx={{ width: 24 }}>
        {item.icon}
      </ListItemIcon>
      <ListItemButton to={item.href} component={Link} onClick={closeMenu}>
        {item.name.toUpperCase()}
      </ListItemButton>
    </ListItem>
  ))

  return lgScreen
    ? <nav><List sx={{ display: 'flex' }}>{list}</List></nav>
    : <span>
        <IconButton onClick={() => setMenuOpen(!menuOpen)} sx={{ zIndex: menuOpen ? 1500 : 'default' }} title={`${menuOpen ? 'Close' : 'Open'} navigation menu`}>
          {menuOpen ? HEADER_ICONS.closeMenu : HEADER_ICONS.openMenu}
        </IconButton>
        <Drawer anchor='left' open={menuOpen} onClose={closeMenu} component='aside'>
          <nav>
            <List>
              {list}
            </List>
          </nav>
        </Drawer>
      </span>
}
