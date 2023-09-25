import { Autocomplete, TextField } from '@mui/material'
import { useContext } from 'react'
import { FilterContext } from '../../contexts/filter-context'

export default function ProductsFilter (props) {
  const { categories } = props
  const { setFilter } = useContext(FilterContext)

  function handleCategoryChange (event) {
    const value = event.target.value
    setFilter({ category: value.toLowerCase() })
  }

  return (
    <form onSubmit={event => event.preventDefault()}>
      <Autocomplete
        disablePortal
        options={categories}
        sx={{ width: 300 }}
        renderInput={params => <TextField label='Category' { ...params } onChange={handleCategoryChange} />}
      />
    </form>
  )
}
