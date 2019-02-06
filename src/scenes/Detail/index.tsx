import React from 'react';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import './index.css';
import Image from '../../components/Image';

class Detail extends React.Component {
   render() {
      return (
         <div style={{ backgroundColor: '#f5f5f5' }}>
            <Logo />
           <div>
           <Image src="https://cdn-images-1.medium.com/max/1000/1*_2ynzQ0p5oCxcYOU48PujQ.jpeg" width="100%" style={{ maxHeight: '70vh', overflow: 'hidden' }} />
           </div>

            <Footer type="secondary" />
         </div>
      );
   }
}

export default Detail;
