import { Box, Modal } from '@mui/material'

export default function ModalBox (props) {
  const { children, isOpen, onClose } = props

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
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={BOX_STYLE}>
        {children}
      </Box>
    </Modal>
  )
}
