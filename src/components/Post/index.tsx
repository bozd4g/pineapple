import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

interface IPostProps {
  title?: string;
  description?: string;
  date?: Date;
  imagePath?: string;
}

class Post extends React.Component<IPostProps> {
  constructor(props: IPostProps) {
    super(props);
  }

  render() {
    return (
      <Row style={{ background: 'red', margin: '0 auto', width: '85%' }}>
        <Col xs={4}>img</Col>
        <Col xs={8}>asd</Col>
      </Row>
    );
  }
}

export default Post;
