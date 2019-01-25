import React from 'react';
import { Row } from 'react-flexbox-grid';
import ReactSVG from 'react-svg';
import indexSVG from '../../images/index.svg';
import './index.css';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Row className="main" style={{ background: `linear-gradient(45deg, ${'#A83279, #FFB246'})` }}>
          <ReactSVG src={indexSVG} className="separator" />
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