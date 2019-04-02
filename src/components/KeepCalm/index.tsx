import React from 'react';
import './index.css';
import { Grid } from '@material-ui/core';

class KeepCalm extends React.Component {
   render() {
      return (
         <Grid className="keep-calm" alignItems="center" container>
            <Grid className="title-side" container>
               <h2 className="first">hey, keep calm!</h2>
               <h1 className="second">It's me.</h1>
            </Grid>
            <Grid className="information" container>
               <p>As you said, I'm Furkan.</p>
               <p>
                  If I have to introduce myself; I’m designing as hobby, coding as lovely and sometimes writing something at somewhere like
                  <b>
                     <a href="#" rel="noopener noreferrer" target="_blank">
                        twitter
                     </a>
                  </b>
                  ,
                  <b>
                     <a href="#" rel="noopener noreferrer" target="_blank">
                        medium
                     </a>
                  </b>
                  and
                  <b>
                     <a href="#" rel="noopener noreferrer" target="_blank">
                        github
                     </a>
                  </b>
                  .
               </p>
            </Grid>
         </Grid>
      );
   }
}

export default KeepCalm;
