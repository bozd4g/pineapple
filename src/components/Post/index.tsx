import React from 'react';
import { Grid, Button } from '@material-ui/core';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { PostOutput } from 'src/services/post/dto/postOutput';
import './index.css';

interface IPostProps {
   item: PostOutput;
}

class Post extends React.Component<IPostProps> {
   constructor(props: IPostProps) {
      super(props);
   }

   getDescriptionAsEllipsis(s: string) {
      return s.substring(0, 200) + '..';
   }

   render() {
      const { item } = this.props;
      return (
         <Grid className="post" container alignItems="center">
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
               <Image src={item.image} width="100%" />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} style={{ padding: '0 5%' }}>
               <div className="content">
                  <h1>{item.title}</h1>
                  <p>{this.getDescriptionAsEllipsis(item.description)}</p>
               </div>

               <Grid container className="bottom" alignItems="center">
                  <Grid className="date" item xs alignItems="center">
                     <FontAwesomeIcon icon={faCalendarDay} />
                     <p>{item.publishDate}</p>
                  </Grid>
                  <Grid item xs>
                     {/*  <Link
                        className="link"
                        to={{
                           pathname: slugGenerator(item.title),
                           state: { item },
                        }}
                     >
                        <Button color="inherit" className="read-more">
                           Read More
                        </Button>
                     </Link> */}
                     <div className="link">
                        <Button className="read-more" color="inherit" onClick={() => window.open(this.props.item.link, '_blank')}>
                           Read More
                        </Button>
                     </div>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      );
   }
}

export default Post;
