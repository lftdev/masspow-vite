import { CircularProgress, Fab, Stack } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { FILTER_ICON } from '../../components/SVGIcons'
import { FilterContext } from '../../contexts/filter-context'
import fetchProducts from '../../services/fetch-products'
import ProductPreview from './components/ProductPreview'
import FiltersModal from './components/FiltersModal'

export default function ProductsPage () {
  const { filter } = useContext(FilterContext)
  const [products, setProducts] = useState([])
  const [filtersModalOpen, setFiltersModalOpen] = useState(false)

  useEffect(() => {
    fetchProducts().then(res => setProducts(res))
  }, [])

  const filteredProducts =
    filter.categories.size === 0
      ? products
      : products.filter(product => filter.categories.has(product.category))

  return (
    <Stack alignItems='center' gap={4} component='main'>
      {filteredProducts.length === 0
        ? <CircularProgress />
        : <>
            <Stack direction='row' justifyContent='center' alignItems='center' gap={5} flexWrap='wrap' sx={{ height: '100%' }}>
              {filteredProducts.map(product =>
                <ProductPreview product={product} key={product.id}/>
              )}
            </Stack>
          </>
      }
      <Fab title='Set search filters' color='primary' sx={{ position: 'fixed', right: 30, bottom: 50 }} onClick={() => setFiltersModalOpen(!filtersModalOpen)}>
        {FILTER_ICON}
      </Fab>
      <FiltersModal isOpen={filtersModalOpen} onClose={() => setFiltersModalOpen(false)} />
    </Stack>
  )
}
