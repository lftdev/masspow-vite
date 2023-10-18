import { Stack, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useContext } from 'react'
import { PRODUCTS_IMAGES_PATH } from '../constants/paths'
import { CART_MODAL_STRINGS } from '../constants/strings'
import { CartContext } from '../contexts/cart-context'
import getProductKeyName from '../utils/get-product-key-name'
import ModalBox from './ModalBox'

export default function CartModal (props) {
  const { isOpen, onClose } = props
  const { cart } = useContext(CartContext)

  const columns =
  ['thumbnail', 'name', 'brand', 'price', 'quantity', 'totalPrice']
    .map(field =>
      field !== 'thumbnail'
        ? {
            field,
            headerName: CART_MODAL_STRINGS.tableHeaders[field],
            width: 150
          }
        : {
            field,
            headerName: CART_MODAL_STRINGS.tableHeaders[field],
            renderCell: params =>
              <img width={48} height={48}
                alt={params.row.name} loading='lazy'
                src={`${PRODUCTS_IMAGES_PATH}/${getProductKeyName({ name: params.row.name, brand: params.row.brand })}.png`}/>
          }
    )

  return (
    <ModalBox isOpen={isOpen} onClose={onClose}>
      <header>
        <Typography variant='h4' color='primary'>
          {CART_MODAL_STRINGS.title}
        </Typography>
      </header>
      {cart.length === 0
        ? <Typography variant='body1'>{CART_MODAL_STRINGS.emptyCartMessage}</Typography>
        : <>
            <DataGrid rows={cart} columns={columns} checkboxSelection sx={{ overflow: 'scroll' }} />
            <Stack component='footer' direction='row' justifyContent='space-between'>
              <Typography variant='h5' color='secondary'>TOTAL</Typography>
              <Typography variant='h5' color='secondary'>
                ${cart.reduce((result, { price, quantity }) => result + price * quantity, 0)}
              </Typography>
            </Stack>
          </>
      }
    </ModalBox>
  )
}
