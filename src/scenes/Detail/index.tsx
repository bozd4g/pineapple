import React from 'react';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import { PostOutput } from 'src/services/post/dto/postOutput';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import htmlToJson from 'src/utils/htmlToJson.js';

interface IDetailProps {
   location: any;
}
class Detail extends React.Component<IDetailProps> {
   generate(content: string) {
      const wholeElements = htmlToJson(content) as [];
      console.log(wholeElements);

      return wholeElements.map(
         (e: any): any => {
            if (e.tagName === 'p') <p>asd</p>;
            else return <p>asd</p>;

            return 'Unknown Value';
         }
      );
   }

   render() {
      const post = this.props.location.state.item as PostOutput;
      if (!post) return <div>This is an error my baby.</div>;

      return (
         <div style={{ backgroundColor: '#f5f5f5' }}>
            <Logo />
            <div className="detail">
               <div className="cover">
                  <img src={post.image} />
               </div>

               <Grid className="post-detail" container>
                  <Grid className="wrapper" container>
                     <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
                           <h1>{post.title}</h1>
                           <h5>This is something for reading about 2 minutes</h5>
                        </Grid>
                        <Grid className="date" item xs={12} sm={12} md={12} lg={3} xl={3}>
                           <FontAwesomeIcon className="date-icon" icon={faCalendarDay} size="lg" />
                           <p style={{ display: 'inline', paddingLeft: 5 }}>{post.publishDate}</p>
                        </Grid>
                     </Grid>
                     {/* <Grid container>{this.generate(post.description)}</Grid> */}
                  </Grid>
               </Grid>
            </div>

            <Footer type="secondary" />
         </div>
      );
   }
}

export default Detail;
