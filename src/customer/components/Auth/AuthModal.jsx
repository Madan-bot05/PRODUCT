import React from 'react'
import { Box, Modal, Typography } from '@mui/material'
import Register from './Register';



const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline:"none",
    p: 4,
  };


function AuthModal({handleClose,open}) {
  return (
    <div>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography> */}
    <Register/>
  </Box>
</Modal>
    </div>
  )
}

export default AuthModal