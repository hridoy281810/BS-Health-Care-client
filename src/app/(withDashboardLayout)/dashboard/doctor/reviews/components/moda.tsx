import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

type DeleteConfirmDialogProps = {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  header?: string;
  contentText?: string;
};

const DeleteConfirmDialog: React.FC<DeleteConfirmDialogProps> = ({
  open,
  onCancel,
  onConfirm,
  header,
  contentText,
}) => (
  <Dialog
    open={open}
    onClose={onCancel}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center' }}>
      {header}
    </DialogTitle>
    <DialogContent sx={{ textAlign: 'center' }}>
      <DialogContentText id="alert-dialog-description">{contentText}</DialogContentText>
    </DialogContent>
    <DialogActions sx={{ justifyContent: 'center' }}>
      <Button onClick={onCancel} variant="contained" color="primary">
        Cancel
      </Button>
      <Button onClick={onConfirm} variant="contained" color="error" autoFocus>
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);

export default DeleteConfirmDialog;
