import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const Notification = ({open, setOpen, message}) => {
  return (
    <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={open}
    autoHideDuration={3000}
    onClose={() => { setOpen(false) }}
    className='mt-5'
>
    <Alert severity="success" sx={{ width: '100%' }}>
        {message}
    </Alert>
</Snackbar>

  )
}
