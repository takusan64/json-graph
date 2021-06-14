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
  open: boolean
  onClose: () => void
}

const SettingDialog: React.FC<SettingDialogProps> = ({ open, onClose }) => {
  const [openDialog, setOpenDialog] = useState(false)

  useEffect(() => {
    setOpenDialog(open);
  }, [open]);

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
          Connection Setting
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            id="ip_address"
            label="IP Address"
            placeholder="127.0.0.1"
            variant="outlined"
            defaultValue="127.0.0.1"
            autoFocus={true}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            required
            id="port"
            label="Port"
            placeholder="27017"
            variant="outlined"
            defaultValue="27017"
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

export default SettingDialog