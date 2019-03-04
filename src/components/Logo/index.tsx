import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
   render() {
      return (
         <Link to="/">
            <div className="title">
               <h1 className="inline name">furkan</h1>
               <h1 className="inline surname">bozdag</h1>
            </div>
         </Link>
      );
   }
}

export default Logo;
