'use client'
import { Box, Modal, Typography } from '@mui/material'
import { GENERAL_STRINGS } from '../constants/strings'

export default function CartModal (props) {
  const { isOpen, onClose } = props

  const BOX_STYLE = {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: 800,
    maxHeight: '100vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }

  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby='cart preview'>
      <Box sx={BOX_STYLE}>
        <header>
          <Typography variant='h4' color='primary'>
            {GENERAL_STRINGS.cartModal.title}
          </Typography>
        </header><Typography variant='body1'>{GENERAL_STRINGS.cartModal.emptyCartMessage}</Typography>
      </Box>
    </Modal>
  )
}
