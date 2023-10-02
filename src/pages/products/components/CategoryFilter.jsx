import { Checkbox, CircularProgress, FormControlLabel, Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { FilterContext } from '../../../contexts/filter-context'
import useCategoriesFetch from '../hooks/use-categories-fetch'

export default function CategoryFilter () {
  const { filter, setFilter } = useContext(FilterContext)
  const categories = useCategoriesFetch()

  function handleCategoryChange (event) {
    const target = event.target
    const value = target.value
    setFilter(prev => {
      const categories = prev.categories
      target.checked
        ? categories.add(value)
        : categories.delete(value)
      return { categories }
    })
  }

  return (
    <Stack gap={2}>
      <Typography variant='h5' color='secondary'>
        Categories
      </Typography>
      {categories.length > 0
        ? categories.map(category => {
          const name = category.name
          return (
            <FormControlLabel key={name} control={<Checkbox value={name} onChange={handleCategoryChange} checked={filter.categories.has(name)} />} label={name.charAt(0).toUpperCase() + name.slice(1)} />
          )
        })
        : <CircularProgress />
      }
    </Stack>
  )
}
