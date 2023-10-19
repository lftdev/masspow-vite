import { Button, Stack, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useContext } from 'react'
import { PRODUCTS_IMAGES_PATH } from '../constants/paths'
import { CART_MODAL_STRINGS } from '../constants/strings'
import { CartContext } from '../contexts/cart-context'
import getProductKeyName from '../utils/get-product-key-name'
import ModalBox from './ModalBox'
import { CLOSE_ICON, DONE_ICON } from './SVGIcons'

export default function CartModal (props) {
  const { isOpen, onClose } = props
  const { cart } = useContext(CartContext)

  const cartIsEmpty = cart.length === 0

  const createGridColumns = columns =>
    columns.map(field =>
      ({
        field,
        headerName: CART_MODAL_STRINGS.tableHeaders[field],
        renderCell:
        field === 'image'
          ? params =>
            <img width={48} height={48}
              alt={params.row.name} loading='lazy'
              src={`${PRODUCTS_IMAGES_PATH}/${getProductKeyName({ name: params.row.name, brand: params.row.brand })}.png`}/>
          : undefined
      })
    )

  return (
    <ModalBox isOpen={isOpen} onClose={onClose}>
      <header>
        <Typography variant='h4' color='primary'>
          {CART_MODAL_STRINGS.title}
        </Typography>
      </header>
      {cartIsEmpty
        ? <Typography variant='body1'>{CART_MODAL_STRINGS.emptyCartMessage}</Typography>
        : <>
            <DataGrid
              columns={createGridColumns(['image', 'name', 'brand', 'price', 'quantity', 'totalPrice'])}
              rows={cart} checkboxSelection sx={{ overflow: 'scroll' }} />
            <Stack direction='row' justifyContent='space-between'>
              <Typography variant='h5' color='secondary'>TOTAL</Typography>
              <Typography variant='h5' color='secondary'>
                ${cart.reduce((result, { price, quantity }) => result + price * quantity, 0)}
              </Typography>
            </Stack>
          </>
      }
      <Stack component='footer' direction='row' justifyContent='space-between'>
        <Button title={CART_MODAL_STRINGS.closeBtn} startIcon={CLOSE_ICON} variant='outlined' color='secondary' onClick={onClose}>{CART_MODAL_STRINGS.closeBtn}</Button>
        <Button title={CART_MODAL_STRINGS.buyBtn} startIcon={DONE_ICON} variant='contained' disabled={cartIsEmpty}>{CART_MODAL_STRINGS.buyBtn}</Button>
      </Stack>
    </ModalBox>
  )
}
