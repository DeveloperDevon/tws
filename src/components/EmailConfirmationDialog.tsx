import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from '@material-ui/core'
import { useHistory } from 'react-router'

interface Props {
  setDialogOpen: (open: boolean) => void
  open: boolean
}

export const EmailConfirmationDialog: React.FC<Props> = ({
  setDialogOpen,
  open,
}) => {
  const history = useHistory()

  const handleClose = () => {
    history.replace('/')
  }

  const handleCloseClick = () => {
    setDialogOpen(false)
    history.replace('/')
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title" style={{ textAlign: 'center' }}>
        Email Successfully Sent
      </DialogTitle>
      <Typography variant="body1" style={{ padding: 15, textAlign: 'center' }}>
        Thank you for reaching out to us. We will be in touch soon!
      </Typography>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          style={{ width: '50%', margin: '10px auto 10px auto' }}
          onClick={handleCloseClick}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
