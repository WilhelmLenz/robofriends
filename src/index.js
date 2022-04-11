import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cardlist from './Cardlist'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Cardlist robots={robots}/>
  </React.StrictMode>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
