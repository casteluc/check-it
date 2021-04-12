import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './style/globalStyle'
import configStore from './store/'
import Routes from './routes'

const store = configStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
            <GlobalStyle/>
            <Routes/>
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)