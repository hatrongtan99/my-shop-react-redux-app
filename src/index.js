import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Layout from './Layout';
import store from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


