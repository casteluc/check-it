import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './style/globalStyle'
import store from './store'
import Routes from './routes'
import { auth } from './firebase'

auth.onAuthStateChanged(user => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle/>
            <Routes/>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    )
})