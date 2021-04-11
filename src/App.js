import React from 'react'
import { Provider } from 'react-redux';

import Home from './pages/Home'
import Routes from './routes'

import GlobalStyle from './style/globalStyle'
import configStore from './store/storeConfig'
import { Route } from 'react-router';

const store = configStore()

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <Routes/>
        </Provider>
    );
}

export default App;
