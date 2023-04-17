import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';
import { useCallback } from 'react';

const BaseModal = ({ open, closeModal, maxWidth, baseModalState }) => {
  const [fullWidth] = useState(true);
  const disableBackdropCloseHandle = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const handleCloseModal = () => {
    closeModal();
  };


  return (
    <>
      <React.Fragment>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={baseModalState.maxWidth}
          open={open ? open : false}
          onClose={disableBackdropCloseHandle}
        >
          <DialogContent>
            {baseModalState.content}
            {/* <DialogContentText>
              You can set my maximum width and whether to adapt or not.
          
            </DialogContentText> */}

          </DialogContent>
          {baseModalState.closeCancel && (<DialogActions>
            <Button onClick={handleCloseModal}>Close</Button>
          </DialogActions>)}

        </Dialog>
      </React.Fragment>
    </>

  )
}
export default BaseModal;