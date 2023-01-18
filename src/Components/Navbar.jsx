import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Typography, Button, Box } from '@mui/material'
import NoCrashIcon from '@mui/icons-material/NoCrash';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    // Toolbar's code
    const StyledToolbar1 = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'flex-start',
        gap: 20
    })
    const StyledToolbar2 = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: 'black'
    })

    // Snackbar code
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <>
            <AppBar position='sticky'>
                <StyledToolbar1>
                    <NoCrashIcon fontSize='large' />
                    <Typography variant='h5' component='h1'>Insurance Portal!</Typography>
                </StyledToolbar1>
                <StyledToolbar2>
                    <Button size='large' variant="text" startIcon={<CheckCircleOutlineIcon />} sx={{ textTransform: 'capitalize' }}>
                        Step One
                    </Button>
                    <Button size='large' variant="text" startIcon={<LooksTwoIcon />} sx={{ textTransform: 'capitalize' }} onClick={handleClick}>
                        Step Two
                    </Button>
                    <Button size='large' variant="text" startIcon={<Looks3Icon />} sx={{ textTransform: 'capitalize' }} onClick={handleClick}>
                        Step Three
                    </Button>
                </StyledToolbar2>
            </AppBar>
            <Box>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message="⚠️ Under Development!" action={action} />
            </Box>
        </>
    )
}
 