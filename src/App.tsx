import React from 'react';
import Router from './components/Router';
import { Grid } from '@material-ui/core';

class App extends React.Component {
   public render() {
      return (
         <Grid style={{ height: '100vh', width: '100vw', backgroundColor: '#f5f5f5' }}>
            <Router />
         </Grid>
      );
   }
}

export default App;
