import React from 'react';
import { Grid, Button } from '@material-ui/core';
import Image from '../Image';
import { Link } from 'react-router-dom';
import { slugGenerator } from 'src/utils/slugGenerator';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { timeDistance } from 'src/utils/dateHelper';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

interface IPostProps {
   title?: string;
   description?: string;
   date?: Date;
   imagePath?: string;
   history?: any;
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
         <Grid className="post" container alignItems="center">
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
               <Image src={this.props.imagePath} width="100%" />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} style={{ padding: '0 5%' }}>
               <div className="content">
                  <h1>{this.props.title}</h1>
                  <p>{this.getDescriptionAsEllipsis(this.props.description!)}</p>
               </div>

               <Grid container className="bottom" alignItems="center">
                  <Grid className="date" item xs alignItems="center">
                     <FontAwesomeIcon icon={faCalendarDay} />
                     <p>{timeDistance(this.props.date)}</p>
                  </Grid>
                  <Grid item xs>
                     <Link className="link" to={slugGenerator(this.props.title!)}>
                        <Button color="inherit" className="read-more">
                           Read More
                        </Button>
                     </Link>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
         /*  <Row className="post">
            <Col xs={4}>
               <Image src={this.props.imagePath} width="100%" />
            </Col>
            <Col xs={8}>
               <Row className="content">
                  <Row>
                     <h1>{this.props.title}</h1>
                     <p>{this.getDescriptionAsEllipsis(this.props.description!)}</p>
                  </Row>
                  <Row className="bottom">
                     <Col xs={6} className="date">
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <p>{timeDistance(this.props.date)}</p>
                     </Col>
                     <Col xs={6}>
                        <Link className="link" to={slugGenerator(this.props.title!)}>
                           <Button color="inherit" className="read-more">
                              Read More
                           </Button>
                        </Link>
                     </Col>
                  </Row>
               </Row>
            </Col>
         </Row> */
      );
   }
}

export default Post;
