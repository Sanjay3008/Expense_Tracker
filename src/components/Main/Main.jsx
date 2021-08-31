import React, { useContext } from 'react'
import {Grid, Card, CardHeader, CardContent, Typography, Divider} from '@material-ui/core'

import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List'
import InfoCard from '../InfoCard';
const Main = () => {
    const classes=useStyles();
    const { balance }= useContext(ExpenseTrackerContext);
    let message;
    if(balance < 0)
    {
        message = "Invalid Entry/ Balance. Please Update";
    }
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align="center" variant="h5">{balance >=0 ? `Total Balance: Rs ${balance}` : `${message}`}</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5rem', marginTop: '20px'}}>
                    <InfoCard />
                </Typography>
                <Divider className={classes.divider}/>
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                       <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
