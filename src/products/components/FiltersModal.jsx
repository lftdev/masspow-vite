import { Typography } from '@mui/material'
import ModalBox from '../../components/ModalBox'
import { FILTERS_MODAL_STRINGS } from '../../constants/strings'
import ProductsFilter from './ProductsFilter'

const FiltersModal = props => (
  <ModalBox { ...props }>
    <header>
      <Typography variant='h4' color='primary'>
        {FILTERS_MODAL_STRINGS.title}
      </Typography>
    </header>
    <ProductsFilter />
  </ModalBox>
)

export default FiltersModal
