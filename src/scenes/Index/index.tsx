import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ReactSVG from 'react-svg';
import IndexSVG from '../../images/index.svg';
import KeepCalm from '../../components/KeepCalm';
import './index.css';
import Post from '../../components/Post';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Row className="main" style={{ background: `linear-gradient(45deg, ${'#A83279, #FFB246'})` }}>
          <Row style={{ width: '100%' }}>
            <Col xs={6}>This side will be introduction image</Col>
            <Col xs={6}>
              <KeepCalm />
            </Col>
          </Row>
          <ReactSVG src={IndexSVG} className="separator" />
        </Row>

        <div className="happening">
          <h1 className="inline light">what's</h1>
          <h1 className="inline bold">happening</h1>
        </div>

        <Post
          title="Basit Tut, Aptal!"
          description="Bugün hayatımızın her yanında olan, o olmadan hayatımızı daha kolay
          şekilde devam ettirmemizin çok zor olduğu bir yaklaşımı/kavramı açıklamak
          istiyorum. Yazılım geliştiricilerin çoğunun aşina olduğu bir prensip.
          KISS (Keep it simple, stupid) yani Basit tut, aptal!."
          imagePath="https://cdn-images-1.medium.com/max/1000/1*_2ynzQ0p5oCxcYOU48PujQ.jpeg"
        />
      </div>
    );
  }
}

export default Index;
