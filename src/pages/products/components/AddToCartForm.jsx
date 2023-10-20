import { Button, Stack, TextField, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { HEADER_ICONS } from '../../../components/SVGIcons'
import { PRODUCT_PREVIEW_COMPONENT_STRINGS } from '../../../constants/strings'
import { CartContext } from '../../../contexts/cart-context'

export default function AddToCartForm (props) {
  const { product } = props
  const { cart, addProduct, removeProduct } = useContext(CartContext)

  const [productAdded, setProductAdded] = useState(cart.some(item => item.id === product.id))
  const [cartBtnDisabled, setCartBtnDisabled] = useState(true)
  const [productQuantity, setProductQuantity] = useState(0)

  const SUBMIT_BTN_TEXT =
  productAdded
    ? PRODUCT_PREVIEW_COMPONENT_STRINGS.removeFromCartBtn
    : PRODUCT_PREVIEW_COMPONENT_STRINGS.addToCartBtn

  function handleQtyInput (event) {
    const value = event.target.value
    const amount = value === '' ? 0 : parseInt(value)
    const isInvalid = amount <= 0 || amount > product.stock
    if (!isInvalid) setProductQuantity(amount)
    setCartBtnDisabled(isInvalid)
  }

  function addToCart () {
    addProduct(product, productQuantity)
    setProductAdded(true)
  }

  function removeFromCart () {
    removeProduct(product.id)
    setProductAdded(false)
  }

  function handleSubmit (event) {
    event.preventDefault()
    productAdded ? removeFromCart() : addToCart()
  }

  return (
    <Stack gap={3}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='h6' component='span'>{PRODUCT_PREVIEW_COMPONENT_STRINGS.priceText}: ${product.price}</Typography>
        <Typography variant='h6' component='span'>{PRODUCT_PREVIEW_COMPONENT_STRINGS.stockText}: {product.stock}</Typography>
      </Stack>
      <form style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }} onSubmit={handleSubmit}>
        <Button type='submit' title={`${SUBMIT_BTN_TEXT} ${product.name}`} disabled={!productAdded && cartBtnDisabled} startIcon={HEADER_ICONS.cart} variant='contained' sx={{ maxWidth: '50%' }}>
          {SUBMIT_BTN_TEXT}
        </Button>
        <TextField type='number' required sx={{ maxWidth: '50%' }} onInput={handleQtyInput} label={PRODUCT_PREVIEW_COMPONENT_STRINGS.qtyInputLabel} placeholder='2' disabled={productAdded} />
      </form>
    </Stack>
  )
}
