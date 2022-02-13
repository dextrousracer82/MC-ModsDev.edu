
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const modal = (title) => {
  let m = (
   <div>
     <h1>{title}</h1>
   </div>
  );
  ReactDOM.render( m, document.getElementById('root'))
}

function App() {
  return (
    <div>
      <h1>5</h1>
      <button onClick={modal}>Press Me!!!</button>
    </div>
  );
}

export default App;
