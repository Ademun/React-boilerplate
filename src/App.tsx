import React from 'react';
import AppBar from './components/AppBar';
import Router from './routes/Router';

function App() {
  return (
    <div className='App'>
      <AppBar />
      <div className='grow-1'>
        <Router />
      </div>
    </div>
  );
}

export default App;
