import { CircularProgress, Paper, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS_IMAGES_PATH } from '../../constants/paths'
import getProductKeyName from '../../utils/get-product-key-name'
import useProductFetchById from './hooks/use-product-fetch-by-id'

export default function ProductDetailPage () {
  const { productId } = useParams()
  const [imgSrc, setImgSrc] = useState('')

  const product = useProductFetchById(productId)

  useEffect(() => {
    if (product != null) setImgSrc(getProductKeyName(product))
  }, [product])

  return (
    <Stack alignItems='center' component='main' sx={{ marginTop: 15 }}>
      {product != null
        ? <Stack alignItems='center' gap={2} style={{ width: 300 }}>
           <Paper alignItems='center' sx={{ width: 300 }} component={Stack}>
             <img src={`${PRODUCTS_IMAGES_PATH}/${imgSrc}.png`} alt='Product preview' width={250} height={300} style={{ pointerEvents: 'none' }} />
           </Paper>
           <Stack direction='row' justifyContent='space-between' gap={2}>
             {['name', 'brand'].map(key => (
              <Paper key={key} component='span'>
                <Typography variant='h4'>
                  {product[key]}
                </Typography>
              </Paper>
             ))}
           </Stack>
            <Paper>
             <Typography>
               {product.description}
             </Typography>
            </Paper>
          </Stack>
        : <CircularProgress />
      }
    </Stack>
  )
}
