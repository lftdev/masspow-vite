import { Button, Card, CardActions, CardContent, CardMedia, Stack, TextField, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { HEADER_ICONS } from '../../../components/SVGIcons'
import { PRODUCTS_IMAGES_PATH } from '../../../constants/paths'
import { PRODUCT_PREVIEW_COMPONENT_STRINGS } from '../../../constants/strings'
import { CartContext } from '../../../contexts/cart-context'
import getProductKeyName from '../../../utils/get-product-key-name'

export default function ProductPreview (props) {
  const { product } = props
  const { cart, setCart } = useContext(CartContext)

  const [productAdded, setProductAdded] = useState(cart.some(item => item.id === product.id))

  const [cartBtnDisabled, setCartBtnDisabled] = useState(true)
  const [productQuantity, setProductQuantity] = useState(0)

  function handleQtyInput (event) {
    const value = event.target.value
    const amount = value === '' ? 0 : parseInt(value)
    const isInvalid = amount <= 0 || amount > product.stock
    if (!isInvalid) setProductQuantity(amount)
    setCartBtnDisabled(isInvalid)
  }

  function addToCart (event) {
    event.preventDefault()
    setCart(prev => [...prev, { ...product, quantity: productQuantity }])
    setCartBtnDisabled(true)
    setProductAdded(true)
  }

  return (
    <Card component='article' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 380 }}>
      <CardMedia component='header' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={`${PRODUCTS_IMAGES_PATH}/${getProductKeyName(product)}.png`} width={250} height={300} alt={`${product.name} thumbnail`} style={{ pointerEvents: 'none' }} loading='lazy' />
        <div>
          <Typography variant='h4'>{product.name}</Typography>
          <Typography variant='h5'>{product.brand}</Typography>
        </div>
      </CardMedia>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
        <Stack component='div' direction='row' justifyContent='space-between'>
          <Typography variant='h6' component='span'>{PRODUCT_PREVIEW_COMPONENT_STRINGS.priceText}: ${product.price}</Typography>
          <Typography variant='h6' component='span'>{PRODUCT_PREVIEW_COMPONENT_STRINGS.stockText}: {product.stock}</Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <form style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }} onSubmit={addToCart}>
          <Button type='submit' title={`${PRODUCT_PREVIEW_COMPONENT_STRINGS.addToCartBtn} ${product.name}`} disabled={cartBtnDisabled || productAdded} startIcon={HEADER_ICONS.cart} variant='contained' sx={{ maxWidth: '50%' }}>
            {PRODUCT_PREVIEW_COMPONENT_STRINGS.addToCartBtn}
          </Button>
          <TextField type='number' required sx={{ maxWidth: '50%' }} onInput={handleQtyInput} label={PRODUCT_PREVIEW_COMPONENT_STRINGS.qtyInputLabel} placeholder='2' disabled={productAdded} />
        </form>
        <Button to={`/products/${product.id}`} color='secondary' component={Link}>{PRODUCT_PREVIEW_COMPONENT_STRINGS.detailsBtn}</Button>
      </CardActions>
    </Card>
  )
}
