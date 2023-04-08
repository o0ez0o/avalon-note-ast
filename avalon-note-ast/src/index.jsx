// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import { App } from './App.jsx'

// ReactDOM.createRoot( 
//   document.querySelector('#root')
// ).render(<App />)


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartingPage from './Components/StartingPage/StartingPage.jsx';
import {App} from './App.jsx';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route exact path="/" element={<StartingPage />} />
      <Route path="/notebook" element={<App />} />
    </Routes>
  </Router>
);
