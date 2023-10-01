import { Typography } from '@mui/material'
import { useContext } from 'react'
import { CART_MODAL_STRINGS } from '../constants/strings'
import { CartContext } from '../contexts/cart-context'
import ModalBox from './ModalBox'

export default function CartModal (props) {
  const { isOpen, onClose } = props
  const { cart } = useContext(CartContext)

  return (
    <ModalBox isOpen={isOpen} onClose={onClose}>
      <header>
        <Typography variant='h4' color='primary'>
          {CART_MODAL_STRINGS.title}
        </Typography>
      </header>
      {cart.length === 0
        ? <Typography variant='body1'>{CART_MODAL_STRINGS.emptyCartMessage}</Typography>
        : cart.map(product =>
            <p key={product.name}>{product.name}</p>
        )
      }
    </ModalBox>
  )
}
