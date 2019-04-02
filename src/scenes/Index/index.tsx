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
import Post from 'src/components/Post';
import { SyncLoader } from 'react-spinners';
import './index.css';

interface IIndexState {
   items?: PostOutput[];
   loading: boolean;
}
class Index extends React.Component<any, IIndexState> {
   constructor(props: any) {
      super(props);
      this.state = {
         items: undefined,
         loading: false,
      };
   }

   async componentWillMount() {
      this.setState({ loading: true });
      await postService.getLastPosts().then((response: PostOutput[]) => {
         this.setState({
            items: response,
            loading: false,
         });
         console.log(response);
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
               {this.state.loading ? (
                  <Grid container justify="center" alignItems="center" style={{ minHeight: 300 }}>
                     <SyncLoader color="#20e3b2" size={20} margin="5px" />
                  </Grid>
               ) : this.state.items ? (
                  this.state.items!.map((e: PostOutput) => {
                     return <Post item={e} />;
                  })
               ) : null}
            </Grid>

            <Footer type="primary" />
         </div>
      );
   }
}

export default Index;
