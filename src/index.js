import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

import store from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOMClient.createRoot(document.getElementById("root"))
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)

// ReactDOM.render(
//   <Router>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </Router>,
//   document.getElementById('root')
// )
