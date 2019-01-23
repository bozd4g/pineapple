import React from 'react';
import { Row } from 'react-flexbox-grid';
import './index.css';

class Index extends React.Component {
  render() {
    return <Row className="main" style={{ background: `linear-gradient(45deg, ${'#A83279, #FFB246'})` }} />;
  }
}

export default Index;
