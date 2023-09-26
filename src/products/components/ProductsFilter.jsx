import { Checkbox, FormControlLabel } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../contexts/filter-context'
import fetchCategories from '../../fetching/fetch-categories'

export default function ProductsFilter () {
  const [categories, setCategories] = useState([])
  const { filter, setFilter } = useContext(FilterContext)

  useEffect(() => {
    fetchCategories().then(response => setCategories(response))
  }, [])

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
    <form onSubmit={event => event.preventDefault()}>
      {categories.map(category => {
        const name = category.name
        return (
          <FormControlLabel key={name} control={<Checkbox value={name} onChange={handleCategoryChange} checked={filter.categories.has(name)} />} label={name.charAt(0).toUpperCase() + name.slice(1)} />
        )
      })}
    </form>
  )
}
