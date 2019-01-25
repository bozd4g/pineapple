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
          <div className="about">
            <h1 className="bigTitle">it's me.</h1>
            <div className="information">
              <h2 className="first">hey, keep calm!</h2>
              <h2 className="second">It's me.</h2>
              <p>As you said, I'm Furkan.</p>
              <p>
                If I have to introduce myself; I’m designing as hobby, coding as lovely and sometimes writing something at somewhere like
                <b>
                  <a href="#" rel="noopener noreferrer" target="_blank">
                    {' '}
                    twitter
                  </a>
                </b>
                ,
                <b>
                  <a href="#" rel="noopener noreferrer" target="_blank">
                    {' '}
                    medium
                  </a>
                </b>{' '}
                and
                <b>
                  <a href="#" rel="noopener noreferrer" target="_blank">
                    {' '}
                    github
                  </a>
                </b>
                .
              </p>
            </div>
          </div>

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
