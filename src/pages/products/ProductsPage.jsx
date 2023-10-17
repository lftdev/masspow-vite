import { CircularProgress, Fab, Stack } from '@mui/material'
import { useContext, useState } from 'react'
import { FILTER_ICON } from '../../components/SVGIcons'
import { FilterContext } from '../../contexts/filter-context'
import FiltersModal from './components/FiltersModal'
import ProductPreview from './components/ProductPreview'
import useProductsFetch from './hooks/use-products-fetch'

export default function ProductsPage () {
  const { filter } = useContext(FilterContext)
  const [filtersModalOpen, setFiltersModalOpen] = useState(false)

  const { productsList } = useProductsFetch()

  const filteredProducts =
    filter.categories.size === 0
      ? productsList
      : productsList.filter(product => filter.categories.has(product.category))

  return (
    <Stack alignItems='center' gap={4} component='main' sx={{ marginTop: 15 }}>
      {filteredProducts.length === 0
        ? <CircularProgress />
        : <Stack direction='row' justifyContent='center' alignItems='center' gap={5} flexWrap='wrap' sx={{ height: '100%' }}>
          {filteredProducts.map(product =>
            <ProductPreview product={product} key={product.id}/>
          )}
        </Stack>
      }
      <Fab title='Set search filters' color='primary' sx={{ position: 'fixed', right: 30, bottom: 50 }} onClick={() => setFiltersModalOpen(!filtersModalOpen)}>
        {FILTER_ICON}
      </Fab>
      <FiltersModal isOpen={filtersModalOpen} onClose={() => setFiltersModalOpen(false)} />
    </Stack>
  )
}
