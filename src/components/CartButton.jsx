import { Badge, IconButton } from '@mui/material'
import { HEADER_ICONS } from './SVGIcons'
import { useState } from 'react'
import CartModal from './CartModal'

export default function CartButton () {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <Badge badgeContent={1} color='primary' component='span'>
      <IconButton onClick={() => setModalOpen(!modalOpen)}>
        {HEADER_ICONS.cart}
      </IconButton>
      <CartModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </Badge>
  )
}
