import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Index from '../../scenes/Index';
import Detail from '../../scenes/Detail';

const Routers = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/:id" component={Detail} />
         </Switch>
      </BrowserRouter>
   );
};

export default Routers;
