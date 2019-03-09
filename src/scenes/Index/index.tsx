import React from 'react';
import ReactSVG from 'react-svg';
import IndexSVG from '../../images/index.svg';
import Logo from '../../components/Logo';
import postService from 'src/services/post/postService';
import { IPostOutput /*  IItem  */, IItem } from 'src/services/post/dto/postOutput';
// import Post from 'src/components/Post';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import KeepCalm from '../../components/KeepCalm';
import Footer from 'src/components/Footer';
import Pagination from 'src/components/Pagination';
import './index.css';
import Post from 'src/components/Post';

interface IIndexState {
   post?: IPostOutput;
}
class Index extends React.Component<any, IIndexState> {
   constructor(props: any) {
      super(props);
      this.state = {
         post: undefined,
      };
   }

   async componentWillMount() {
      const data = await postService.getLastPosts();
      this.setState({
         post: data,
      });
   }

   render() {
      return (
         <div>
            <Logo />

            <Grid container>
               <Grid container className="main" style={{ height: '75vh' }}>
                  <Hidden xsDown smDown mdDown>
                     <Grid lg={6} xl={6}>
                        This side will be introduction image
                     </Grid>
                  </Hidden>
                  <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
                     <KeepCalm />
                  </Grid>

                  <Grid container justify="flex-end" alignItems="flex-end">
                     <ReactSVG src={IndexSVG} style={{ width: '100%', lineHeight: 0, marginBottom: -1 }} />
                  </Grid>
               </Grid>
               <Grid container justify="center" style={{ padding: '20px 0', background: '#f5f5f5' }}>
                  <h1 className="happening light">what's</h1>
                  <h1 className="happening bold">happening</h1>
               </Grid>
            </Grid>

            {this.state.post
               ? this.state.post!.items!.map((e: IItem) => {
                    return <Post title={e.title} description={e.description} imagePath={e.thumbnail} date={new Date(e.pubDate)} />;
                 })
               : null}

            <Pagination totalSize={15} eachPageSize={3} currentPage={1} />

            <Footer type="primary" />
         </div>
      );
   }
}

export default Index;
