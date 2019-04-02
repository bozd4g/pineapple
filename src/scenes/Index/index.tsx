import React from 'react';
import ReactSVG from 'react-svg';
import IndexSVG from '../../images/index.svg';
import Logo from '../../components/Logo';
import postService from 'src/services/post/postService';
import { PostOutput } from 'src/services/post/dto/postOutput';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import KeepCalm from '../../components/KeepCalm';
import Footer from 'src/components/Footer';
import Pagination from 'src/components/Pagination';
import Post from 'src/components/Post';
import './index.css';

interface IIndexState {
   post?: PostOutput[];
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
         <div style={{ background: 'inherit' }}>
            <Logo />

            <Grid container style={{ position: 'relative' }}>
               <Grid container className="main" alignItems="center">
                  <Hidden xsDown smDown mdDown>
                     <Grid lg={6} xl={6}>
                        This side will be introduction image
                     </Grid>
                  </Hidden>
                  <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
                     <KeepCalm />
                  </Grid>
               </Grid>
               <ReactSVG src={IndexSVG} style={{ position: 'absolute', bottom: 0, width: '100%', lineHeight: 0, marginBottom: -1 }} />
            </Grid>
            <Grid container justify="center" style={{ background: '#f5f5f5' }}>
               <h1 className="happening light">what's</h1>
               <h1 className="happening bold">happening</h1>
            </Grid>

            <Grid style={{ padding: '0 10%' }}>
               {this.state.post
                  ? this.state.post!.map((e: PostOutput) => {
                       return <Post item={e} />;
                    })
                  : null}
            </Grid>

            <Pagination totalSize={15} eachPageSize={3} currentPage={1} />

            <Footer type="primary" />
         </div>
      );
   }
}

export default Index;
