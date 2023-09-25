import { Autocomplete, TextField } from '@mui/material'

export default function ProductsFilter (props) {
  const { categories } = props
  return (
    <form>
      <Autocomplete
        disablePortal
        options={categories}
        sx={{ width: 300 }}
        renderInput={params => <TextField label='Category' {...params} />}
      />
    </form>
  )
}
