import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import SocialIcons from './components/SocialIcons';
import ReactSVG from 'react-svg';
import IndexSVG from '../../images/index.svg';
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
            <ReactSVG src={IndexSVG} style={{ display: this.props.type === 'primary' ? 'block' : 'none' }} />
            <Row className="inner">
               <Row className="columns">
                  <Col xs={6}>
                     <p>
                        I don't know what’s happening here.
                        <br /> Anyway, here is <b>Jupiter</b>.
                     </p>
                  </Col>
                  <Col xs={6} className="social">
                     <SocialIcons className="center-icons" />
                  </Col>
               </Row>
            </Row>
         </div>
      );
   }
}

export default Footer;
