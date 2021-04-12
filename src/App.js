import React from 'react'
import { Provider } from 'react-redux';

import Routes from './routes'

import GlobalStyle from './style/globalStyle'
import configStore from './store/config'

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
