import { Button, Stack, Typography } from '@mui/material'
import ModalBox from '../../../components/ModalBox'
import { FILTERS_MODAL_STRINGS } from '../../../constants/strings'
import CategoryFilter from './CategoryFilter'

export default function FiltersModal (props) {
  const { isOpen, onClose } = props

  return (
    <ModalBox isOpen={isOpen} onClose={onClose}>
      <header>
        <Typography variant='h4' color='primary'>
          {FILTERS_MODAL_STRINGS.title}
        </Typography>
      </header>
      <form onSubmit={event => event.preventDefault()}>
        <CategoryFilter />
      </form>
      <Stack component='footer'>
        <Button onClick={onClose} variant='contained'>OK</Button>
      </Stack>
    </ModalBox>
  )
}
