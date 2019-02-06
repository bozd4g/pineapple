import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Index from '../../scenes/Index';
import Detail from '../../scenes/Detail';

const Router = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/detail" component={Detail} />
         </Switch>
      </BrowserRouter>
   );
};

export default Router;
