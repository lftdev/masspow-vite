import { Typography } from '@mui/material'
import { CART_MODAL_STRINGS } from '../constants/strings'
import ModalBox from './ModalBox'

export default function CartModal (props) {
  const { isOpen, onClose } = props

  return (
    <ModalBox isOpen={isOpen} onClose={onClose}>
      <header>
        <Typography variant='h4' color='primary'>
          {CART_MODAL_STRINGS.title}
        </Typography>
      </header>
      <Typography variant='body1'>{CART_MODAL_STRINGS.emptyCartMessage}</Typography>
    </ModalBox>
  )
}
