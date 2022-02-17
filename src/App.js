
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './nav.js';

function App() {
  return (
    <div className='flex bg-slate-700'>
      <Nav />
      <div className='bg-slate-700' id='main'>
        <h1 className='center'>ih</h1>
      </div>
    </div>
  );
}

export default App;
