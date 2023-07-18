import React from 'react';
import Header from './components/Header';
import Todocontainer from './components/Todocontainer';

const App = () => (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <Todocontainer />
    </div>
  </div>
);

export default App;
