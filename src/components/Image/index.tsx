import React from 'react';
import './index.css';

interface IImageProps {
   src?: string;
   width?: string | number;
   style?: any;
}

class Image extends React.Component<IImageProps> {
   constructor(props: IImageProps) {
      super(props);
   }

   render() {
      return (
         <div className="image" style={this.props.style}>
            <img src={this.props.src} style={{ width: this.props.width }} />
         </div>
      );
   }
}

export default Image;
