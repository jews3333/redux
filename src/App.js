import React from 'react';
import './App.css';

import Counter from './components/Counter';
import Buttons from './components/Buttons';
import Option from './components/Option';


function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Counter />
      <Option />
      <Buttons />
    </div>
  );
}

export default App;
