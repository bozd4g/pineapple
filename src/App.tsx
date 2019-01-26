import React from 'react';
import Index from './scenes/Index';
import Logo from './components/Logo';

class App extends React.Component {
  public render() {
    return (
      <div style={{ height: '100vh' }}>
        <Logo />
        <Index />
      </div>
    );
  }
}

export default App;
