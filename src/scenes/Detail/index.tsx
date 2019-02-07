import React from 'react';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import './index.css';
import { Row, Col } from 'react-flexbox-grid';

class Detail extends React.Component {
   render() {
      return (
         <div style={{ backgroundColor: '#f5f5f5' }}>
            <Logo />
            <div className="detail">
               <div className="cover">
                  <img src="https://cdn-images-1.medium.com/max/1000/1*_2ynzQ0p5oCxcYOU48PujQ.jpeg" />
               </div>
               <Row center="xs" className="post-detail">
                  <Col xs={10} className="wrapper">
                     <h1>Basit tut, aptal!</h1>
                     <p>This is something for reading about 2 minutes</p>
                  </Col>
               </Row>
            </div>

            <Footer type="secondary" />
         </div>
      );
   }
}

export default Detail;
