import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core'

type SettingDialogProps = {
  name: string
  open: boolean
  onClose: () => void
}

const ItemSettingDialog: React.FC<SettingDialogProps> = ({ name, open, onClose }) => {
  const [openDialog, setOpenDialog] = useState(false)

  useEffect(() => {
    setOpenDialog(open);
  }, [open])

  const handleClose = () => {
    setOpenDialog(false)
    onClose()
  }

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleClose}
      >
        <DialogTitle>
          {name} Setting
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            label="予測数"
            placeholder="1000"
            variant="outlined"
            autoFocus={true}
            defaultValue="5000"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ItemSettingDialog