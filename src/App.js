import React from 'react'
import { Provider } from 'react-redux';

import Home from './pages/Home'
import GlobalStyle from './style/globalStyle'
import configStore from './store/storeConfig'

const store = configStore()

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <div className="App">
                <Home/>
            </div>
        </Provider>
    );
}

export default App;
