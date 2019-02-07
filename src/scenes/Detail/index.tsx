import React from 'react';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import './index.css';
import { Row } from 'react-flexbox-grid';

class Detail extends React.Component {
   render() {
      return (
         <div style={{ backgroundColor: '#f5f5f5' }}>
            <Logo />
            <div className="cover">
               <img src="https://cdn-images-1.medium.com/max/1000/1*_2ynzQ0p5oCxcYOU48PujQ.jpeg" />
            </div>

            <Row>asd</Row>
            <Footer type="secondary" />
         </div>
      );
   }
}

export default Detail;
