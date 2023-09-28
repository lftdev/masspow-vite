import { CircularProgress, Paper, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS_IMAGES_PATH } from '../../constants/paths'
import { getProductById } from '../../services/fetch-products'

export default function ProductDetailPage () {
  const { productId } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    getProductById(parseInt(productId)).then(response => setProduct(response))
  }, [])

  return (
    <Stack alignItems='center' component='main'>
      {product != null
        ? <Stack alignItems='center' gap={2} style={{ width: 300 }}>
           <Paper alignItems='center' sx={{ width: 300 }} component={Stack}>
             <img src={`${PRODUCTS_IMAGES_PATH}/${product.key_name}.png`} alt='Product preview' width={250} height={300} style={{ pointerEvents: 'none' }} />
           </Paper>
           <Stack direction='row' justifyContent='space-between' gap={2}>
             {['name', 'brand'].map(key => (
               <Paper key={key} justifyContent='center' alignItems='center' sx={{ p: 2 }} component='span'>
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
