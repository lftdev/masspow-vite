import { Button, Card, CardActions, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { PRODUCTS_IMAGES_PATH } from '../../../constants/paths'
import { PRODUCT_PREVIEW_COMPONENT_STRINGS } from '../../../constants/strings'
import getProductKeyName from '../../../utils/get-product-key-name'
import AddToCartForm from './AddToCartForm'

export default function ProductPreview (props) {
  const { product } = props

  return (
    <Card component='article' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 380 }}>
      <CardMedia component='header' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={`${PRODUCTS_IMAGES_PATH}/${getProductKeyName(product)}.png`} width={250} height={300} alt={`${product.name} thumbnail`} style={{ pointerEvents: 'none' }} loading='lazy' />
        <div>
          <Typography variant='h4'>{product.name}</Typography>
          <Typography variant='h5'>{product.brand}</Typography>
        </div>
      </CardMedia>
      <CardActions sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <AddToCartForm { ...props } />
        <Button to={`/products/${product.id}`} color='secondary' component={Link}>{PRODUCT_PREVIEW_COMPONENT_STRINGS.detailsBtn}</Button>
      </CardActions>
    </Card>
  )
}
