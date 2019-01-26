import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ReactSVG from 'react-svg';
import IndexSVG from '../../images/index.svg';
import KeepCalm from '../../components/KeepCalm';
import './index.css';

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
      </div>
    );
  }
}

export default Index;
