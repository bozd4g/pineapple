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
      return this.props.type === 'primary' ? (
         <div className="footer">
            <ReactSVG src={IndexSVG} />
            <Row className="inner">
               <Row className="columns">
                  <Col xs={6} className="center">
                     <p>
                        I don't know what’s happening here.
                        <br /> Anyway, here is <b>Jupiter</b>.
                     </p>
                  </Col>
                  <Col xs={6} style={{ float: 'right' }}>
                     <SocialIcons />
                  </Col>
               </Row>
            </Row>
         </div>
      ) : (
         <Row>secondary</Row>
      );
   }
}

export default Footer;
