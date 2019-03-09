import React from 'react';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import './index.css'; /* 
import Image from '../../components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'; */

class Detail extends React.Component {
   render() {
      /* const centerImage = {
         display: 'block',
         margin: '5% auto',
      }; */
      return (
         <div style={{ backgroundColor: '#f5f5f5' }}>
            <Logo />
            <div className="detail">
               <div className="cover">
                  <img src="https://cdn-images-1.medium.com/max/1000/1*_2ynzQ0p5oCxcYOU48PujQ.jpeg" />
               </div>
               {/* <Row center="xs" className="post-detail">
                  <Col xs={10} className="wrapper">
                     <Row>
                        <Col xs={10}>
                           <h1>Basit tut, aptal!</h1>
                           <h5>This is something for reading about 2 minutes</h5>
                        </Col>
                        <Col xs={2} className="date">
                           <FontAwesomeIcon className="date-icon" icon={faCalendarDay} size="lg" />
                           <p>2 days ago</p>
                        </Col>
                     </Row>

                     <p>
                        Bugün hayatımızın her yanında olan, o olmadan hayatımızı daha kolay şekilde devam ettirmemizin çok zor olduğu bir yaklaşımı/kavramı açıklamak istiyorum. Yazılım
                        geliştiricilerin çoğunun aşina olduğu bir prensip. KISS (Keep it simple, stupid) yani <b>“Basit tut, aptal!”</b>.
                     </p>

                     <Image src="https://cdn-images-1.medium.com/max/1000/1*_2ynzQ0p5oCxcYOU48PujQ.jpeg" width="50%" imageStyle={centerImage} />
                  </Col>
               </Row> */}
            </div>

            <Footer type="secondary" />
         </div>
      );
   }
}

export default Detail;
