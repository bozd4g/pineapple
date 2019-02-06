import React from 'react';
import Router from './components/Router';

class App extends React.Component {
   public render() {
      return (
         <div style={{ height: '100vh' }}>
            <Router />
         </div>
      );
   }
}

export default App;
