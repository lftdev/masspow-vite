import { CircularProgress, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import fetchCategories from '../fetch-categories'
import fetchProducts from '../fetch-products'
import ProductPreview from './components/ProductPreview'
import ProductsFilter from './components/ProductsFilter'

export default function ProductsPage () {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchProducts().then(res => setProducts(res))
    fetchCategories().then(res => setCategories(res))
  }, [])

  const CATEGORIES_LABELS = categories.map(category => {
    const name = category.name
    return {
      label: name.charAt(0).toUpperCase() + name.slice(1)
    }
  })

  return (
    <Stack alignItems='center' gap={4} component='main'>
      {products.length === 0
        ? <CircularProgress />
        : <>
            <ProductsFilter categories={CATEGORIES_LABELS} />
            <Stack direction='row' justifyContent='center' alignItems='center' gap={5} flexWrap='wrap' sx={{ height: '100%' }}>
              {products.map(product =>
                <ProductPreview product={product} key={product.id}/>
              )}
            </Stack>
          </>
      }
    </Stack>
  )
}
