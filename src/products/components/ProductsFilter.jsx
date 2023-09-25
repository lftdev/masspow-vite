import { Autocomplete, TextField } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../contexts/filter-context'
import fetchCategories from '../../fetching/fetch-categories'

export default function ProductsFilter () {
  const [categories, setCategories] = useState([])
  const { setFilter } = useContext(FilterContext)

  useEffect(() => {
    fetchCategories().then(res => setCategories(res))
  }, [])

  const categoriesLabels =
    categories.map(category => {
      const name = category.name
      return {
        label: name.charAt(0).toUpperCase() + name.slice(1)
      }
    })

  function handleCategoryChange (event) {
    const value = event.target.value
    setFilter({ category: value.toLowerCase() })
  }

  return (
    <form onSubmit={event => event.preventDefault()}>
      <Autocomplete
        disablePortal
        options={categoriesLabels}
        sx={{ width: 300 }}
        renderInput={params => <TextField label='Category' { ...params } onChange={handleCategoryChange} />}
      />
    </form>
  )
}
