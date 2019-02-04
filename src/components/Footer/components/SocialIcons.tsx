import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faMedium, faLinkedinIn, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './index.css';

interface ISocialIconsProps {
   className?: string;
}
class SocialIcons extends React.Component<ISocialIconsProps> {
   render() {
      return (
         <Row className={this.props.className!}>
            <Col xs>
               <a href="#" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="icon facebook" size="3x" icon={faFacebook} />
               </a>
            </Col>
            <Col xs>
               <a href="#" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="icon instagram" size="3x" icon={faInstagram} />
               </a>
            </Col>
            <Col xs>
               <a href="#" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="icon twitter" size="3x" icon={faTwitter} />
               </a>
            </Col>
            <Col xs>
               <a href="#" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="icon medium" size="3x" icon={faMedium} />
               </a>
            </Col>
            <Col xs>
               <a href="#" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="icon linkedIn" size="3x" icon={faLinkedinIn} />
               </a>
            </Col>
            <Col xs>
               <a href="#" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="icon spotify" size="3x" icon={faSpotify} />
               </a>
            </Col>
            <Col xs>
               <a href="#" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="icon github" size="3x" icon={faGithub} />
               </a>
            </Col>
            <Col xs>
               <a href="#" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="icon email" size="3x" icon={faEnvelope} />
               </a>
            </Col>
         </Row>
      );
   }
}

export default SocialIcons;
