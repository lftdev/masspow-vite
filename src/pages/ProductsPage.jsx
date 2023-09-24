import { CircularProgress, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import fetchProducts from '../get-products'
import ProductPreview from '../components/ProductPreview'

export default function ProductsPage () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts().then(res => setProducts(res))
  }, [])

  return (
    <Stack direction='row' component='main' justifyContent='center' alignItems='center' gap={5} flexWrap='wrap' sx={{ height: '100%' }}>
      {products.length === 0
        ? <CircularProgress />
        : products.map(product => (
          <ProductPreview product={product} key={product.id}/>
        ))}
    </Stack>
  )
}
