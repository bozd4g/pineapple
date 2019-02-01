import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

interface IFooterProps {
  type: 'primary' | 'secondary';
}
class Footer extends React.Component<IFooterProps> {
  constructor(props: IFooterProps) {
    super(props);
  }

  render() {
    return this.props.type === 'primary' ? (
      <Row>
        <Row>
          <Col xs={4}>desc</Col>
          <Col xs={8}>social icons</Col>
        </Row>
      </Row>
    ) : (
      <Row>secondary</Row>
    );
  }
}

export default Footer;
