import { Badge, IconButton } from '@mui/material'
import { HEADER_ICONS } from './SVGIcons'
import { useContext, useState } from 'react'
import CartModal from './CartModal'
import { CartContext } from '../contexts/cart-context'

export default function CartButton () {
  const [modalOpen, setModalOpen] = useState(false)
  const { cart } = useContext(CartContext)

  return (
    <Badge badgeContent={cart.length} color='primary' component='span'>
      <IconButton onClick={() => setModalOpen(!modalOpen)}>
        {HEADER_ICONS.cart}
      </IconButton>
      <CartModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </Badge>
  )
}
