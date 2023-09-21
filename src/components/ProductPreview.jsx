import { Button, Card, CardActions, CardContent, CardMedia, Stack, TextField, Typography } from '@mui/material'
import { PRODUCTS_IMAGES_PATH } from '../constants/paths'
import { HEADER_ICONS } from './SVGIcons'
import { PRODUCT_PREVIEW_COMPONENT_STRINGS } from '../constants/strings'
import { useState } from 'react'

export default function ProductPreview (props) {
  const { product } = props

  const [cartBtnDisabled, setCartBtnDisabled] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [productQuantity, setProductQuantity] = useState(0)

  const PRODUCT_NAME =
  product.variant != null
    ? `${product.variant.charAt(0).toUpperCase() + product.variant.slice(1)} ${product.name}`
    : product.name

  function handleQtyInput (event) {
    const stock = product.stock
    const value = event.target.value
    const amount = value === '' ? 0 : parseInt(value)
    const isInvalid = amount <= 0 || amount > stock
    if (!isInvalid) setProductQuantity(amount)
    setCartBtnDisabled(isInvalid)
  }

  function addToCart (event) {
    event.preventDefault()
  }

  return (
    <Card component='article' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 380 }}>
      <CardMedia component='header' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={`${PRODUCTS_IMAGES_PATH}/${product.key_name}.png`} width={250} height={300} alt={`${product.name} thumbnail`} style={{ pointerEvents: 'none' }} loading='lazy' />
        <div>
          <Typography variant='h4'>{PRODUCT_NAME}</Typography>
          <Typography variant='h5'>{product.brand}</Typography>
        </div>
      </CardMedia>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
        <Stack component='div' direction='row' justifyContent='space-between'>
          <Typography variant='h6' component='span'>{PRODUCT_PREVIEW_COMPONENT_STRINGS.priceText}: ${product.price}</Typography>
          <Typography variant='h6' component='span'>{PRODUCT_PREVIEW_COMPONENT_STRINGS.stockText}: {product.stock}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <form style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }} onSubmit={addToCart}>
          <Button type='submit' title={`${PRODUCT_PREVIEW_COMPONENT_STRINGS.addToCartBtn} ${product.name}`} disabled={cartBtnDisabled} startIcon={HEADER_ICONS.cart} variant='contained' sx={{ maxWidth: '50%' }}>
            {PRODUCT_PREVIEW_COMPONENT_STRINGS.addToCartBtn}
          </Button>
          <TextField type='number' required sx={{ maxWidth: '50%' }} onInput={handleQtyInput} label={PRODUCT_PREVIEW_COMPONENT_STRINGS.qtyInputLabel} placeholder='2' />
        </form>
      </CardActions>
    </Card>
  )
}
