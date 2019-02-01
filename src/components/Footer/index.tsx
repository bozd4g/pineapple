import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faMedium, faLinkedinIn, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './index.css';

interface IFooterProps {
  type: 'primary' | 'secondary';
}
class Footer extends React.Component<IFooterProps> {
  constructor(props: IFooterProps) {
    super(props);
  }

  render() {
    return this.props.type === 'primary' ? (
      <Row style={{ width: '100%' }}>
        <Col xs={7} className="center">
          <p>
            I don't know what’s happening here. Anyway, here is <b>Jupiter</b>.
          </p>
        </Col>
        <Col xs={5} style={{ float: 'right' }}>
          <Row className="center">
            <Col xs>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" size="3x" icon={faFacebook} />
              </a>
            </Col>
            <Col xs>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" size="3x" icon={faInstagram} />
              </a>
            </Col>
            <Col xs>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" size="3x" icon={faTwitter} />
              </a>
            </Col>
            <Col xs>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" size="3x" icon={faMedium} />
              </a>
            </Col>
            <Col xs>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" size="3x" icon={faLinkedinIn} />
              </a>
            </Col>
            <Col xs>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" size="3x" icon={faSpotify} />
              </a>
            </Col>
            <Col xs>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" size="3x" icon={faGithub} />
              </a>
            </Col>
            <Col xs>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" size="3x" icon={faEnvelope} />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    ) : (
      <Row>secondary</Row>
    );
  }
}

export default Footer;
