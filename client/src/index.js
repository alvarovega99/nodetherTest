import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_URL || "http://localhost:5000";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
      </BrowserRouter>
  </Provider>,
);

reportWebVitals();