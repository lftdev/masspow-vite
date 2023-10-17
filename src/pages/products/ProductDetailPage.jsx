import { CircularProgress, Paper, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { PRODUCTS_IMAGES_PATH } from '../../constants/paths'
import getProductKeyName from '../../utils/get-product-key-name'
import AddToCartForm from './components/AddToCartForm'
import useProductsFetch from './hooks/use-products-fetch'

export default function ProductDetailPage () {
  const { productId } = useParams()

  const { productById } = useProductsFetch(parseInt(productId))

  return (
    <Stack alignItems='center' component='main' sx={{ marginTop: 15 }}>
      {productById != null
        ? <Stack alignItems='center' gap={2} style={{ width: 300 }}>
           <Paper alignItems='center' sx={{ width: 300 }} component={Stack}>
             <img src={`${PRODUCTS_IMAGES_PATH}/${getProductKeyName(productById)}.png`} alt='Product preview' width={250} height={300} style={{ pointerEvents: 'none' }} />
           </Paper>
           <Stack direction='row' justifyContent='space-between' gap={2}>
             {['name', 'brand'].map(key => (
              <Paper key={key} component='span'>
                <Typography variant='h4'>
                  {productById[key]}
                </Typography>
              </Paper>
             ))}
           </Stack>
            <Paper>
             <Typography>
               {productById.description}
             </Typography>
            </Paper>
            <Paper sx={{ p: 2 }}>
              <AddToCartForm product={productById} />
            </Paper>
          </Stack>
        : <CircularProgress />
      }
    </Stack>
  )
}
