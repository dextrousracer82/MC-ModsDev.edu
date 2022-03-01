
import React from 'react';
import './index.css';
import Nav from './nav.js';
import Md from './Md.js';
import ReactMarkdown from "react-markdown";

let markdown = " <h1>hiiiiiiiii</h1> "

function App() {
  return (
    <div>
      <div id='nav' className='flex'>
        <Nav />
      </div>
      <div className='main'>
        <h6 className='text-slate-700'>dummy text</h6>
        <h1 className='text-center mt-10'>Hello World</h1>
        <p className='text-center'>This is working</p>
        <p>yesssssssssss</p>
        <p>dissss awsome</p>
        <ReactMarkdown source={markdown}  className="text-center text-white text-lg"/>
      </div>
    </div>
  );
}

export default App;
