import { CircularProgress, Stack } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../contexts/filter-context'
import fetchCategories from '../fetch-categories'
import fetchProducts from '../fetch-products'
import ProductPreview from './components/ProductPreview'
import ProductsFilter from './components/ProductsFilter'

export default function ProductsPage () {
  const { filter } = useContext(FilterContext)
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
  const FILTERED_PRODUCTS = filter.category === ''
    ? products
    : products.filter(product => product.category === filter.category)

  return (
    <Stack alignItems='center' gap={4} component='main'>
      <ProductsFilter categories={CATEGORIES_LABELS} />
      {FILTERED_PRODUCTS.length === 0
        ? <CircularProgress />
        : <>
            <Stack direction='row' justifyContent='center' alignItems='center' gap={5} flexWrap='wrap' sx={{ height: '100%' }}>
              {FILTERED_PRODUCTS.map(product =>
                <ProductPreview product={product} key={product.id}/>
              )}
            </Stack>
          </>
      }
    </Stack>
  )
}
