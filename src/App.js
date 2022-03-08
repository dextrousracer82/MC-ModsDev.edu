
import React from 'react';
import './index.css';
import Nav from './nav.js';
import ReactMarkdown from "react-markdown";
import AppMarkdown from './App.md'
import { useState, useEffect } from 'react'

// function App() {
//   return (
//     <div>
//       <div id='nav' className='flex'>
//         <Nav />
//       </div>
//       <div className='main'>
//         <h6 className='text-slate-700'>dummy text</h6>
//         <h1 className='text-center mt-10'>Hello World</h1>
//         <p className='text-center'>This is working</p>
//         <p>yesssssssssss</p>
//         <div className=' text-center text-white'>
//           <ReactMarkdown children={file_name} />
//         </div>
//       </div>
//     </div>
//   ); 
// }

export const App = () => {
	const [tosText, setTosText] = useState('')
	const [AppMarkdownText, setAppMarkdownText] = useState('')

	// Fetch Terms of Use
	useEffect(() => {
		fetch(AppMarkdown).then(res => res.text()).then(text => setTosText(text))
	})


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
        <div className=' text-center text-white'>
        <ReactMarkdown children={tosText} />
			  <ReactMarkdown children={AppMarkdownText} /> 
        </div>
      </div>
    </div>
	)
}



export default App;