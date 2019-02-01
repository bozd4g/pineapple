import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { timeDistance } from '../../utils/dateHelper';
import './index.css';

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

  getDescriptionAsEllipsis(s: string) {
    return s.substring(0, 200) + '..';
  }

  render() {
    return (
      <Row className="post">
        <Col xs={4}>
          <Image src={this.props.imagePath} width="100%" />
        </Col>
        <Col xs={8}>
          <Row className="content">
            <Row>
              <h1>{this.props.title}</h1>
              <p>{this.getDescriptionAsEllipsis(this.props.description!)}</p>
            </Row>
            <Row className="footer">
              <Col xs={6} className="date">
                <FontAwesomeIcon icon={faCalendarDay} />
                <p>{timeDistance(this.props.date)}</p>
              </Col>
              <Col xs={6}>
                <Button color="inherit" className="read-more">
                  Read More
                </Button>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Post;
