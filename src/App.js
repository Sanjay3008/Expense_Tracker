import React from 'react'
import Details from './components/Details/Details';

import Main from './components/Main/Main'
import {  Grid } from '@material-ui/core'

import useStyles from './styles'

import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
const App = () => {

    const classess = useStyles();
    return (<div>
        <div>
      
        <Grid className= {classess.grid} container spacing={0} alignItems="center" justify="center" style={{height: "100vh"}}>
            <Grid item xs={12} sm={3} className={classess.mobile}>
                <Details title="Income" />
            </Grid>
            <Grid item xs={12} sm={4} className={classess.main}>
               <Main />
            </Grid>
            <Grid item xs={12} sm={3} className={classess.desktop}>
                <Details title="Income" />
            </Grid>
            <Grid item xs={12} sm={3} className = {classess.last}>
                <Details title="Expense" />
            </Grid>
        </Grid>
    </div>
     <div>
     <PushToTalkButtonContainer>
         <PushToTalkButton />
         <ErrorPanel />
     </PushToTalkButtonContainer></div> 
     </div>)
}

export default App
