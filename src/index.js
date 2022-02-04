import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res) => res.json())
//   .then((res) => (document.getElementById('data').innerHTML = hasil(res)));

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((response) => console.log(response));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
