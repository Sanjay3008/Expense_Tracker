import React from 'react';
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import useStyles from './styles'



const CustomSnackbar = ({open, setOpen}) => {
    const classes = useStyles();


    const handleclose = (event, reason) => {
        if(reason === 'clickaway') return;
        setOpen(false);
    }
    return (
        <div className={classes.root}>
            <Snackbar anchorOrigin={{vertical:'top', horizontal:'right'}}
            open={open} autoHideDuration={3000}
            onClose={handleclose}>
                <MuiAlert onClose={handleclose} severity="success" elevation={6} variant="filled">
                    Transaction successfully created.
                </MuiAlert>
            </Snackbar>
            
        </div>
    )
}

export default CustomSnackbar
