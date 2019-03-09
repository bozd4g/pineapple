import React from 'react';
import SocialIcons from './components/SocialIcons';
import ReactSVG from 'react-svg';
import IndexSVG from '../../images/index.svg';
import { Grid } from '@material-ui/core';
import './index.css';

interface IFooterProps {
   type: 'primary' | 'secondary';
}
class Footer extends React.Component<IFooterProps> {
   constructor(props: IFooterProps) {
      super(props);
   }

   render() {
      return (
         <div className="footer" style={{ color: this.props.type === 'primary' ? 'white' : 'transparent' }}>
            <ReactSVG className="footer-separator" src={IndexSVG} style={{ display: this.props.type === 'primary' ? 'block' : 'none' }} />
            <Grid className="footer-container" container spacing={24} style={{ background: this.props.type === 'primary' ? 'white' : 'transparent' }}>
               <Grid className="footer-text" xs={12} sm={12} md={6} lg={6} xl={6} container alignItems="center">
                  <p>
                     I don't know what’s happening here.
                     <br /> Anyway, here is <b>Jupiter</b>.
                  </p>
               </Grid>
               <Grid xs={12} sm={12} md={6} lg={6} xl={6} container alignItems="center" justify="center">
                  <SocialIcons />
               </Grid>
            </Grid>
         </div>
      );
   }
}

export default Footer;
