import React from 'react';
import './index.css';

interface IImageProps {
   src?: string;
   width?: string | number;
   style?: any;
   imageStyle?: any;
}

class Image extends React.Component<IImageProps> {
   constructor(props: IImageProps) {
      super(props);
   }

   render() {
      var imageStyle = this.props.imageStyle;
      if (imageStyle) imageStyle.width = this.props.width;
      else imageStyle = { width: this.props.width };

      return (
         <div className="image" style={this.props.style}>
            <img src={this.props.src} style={imageStyle} />
         </div>
      );
   }
}

export default Image;
