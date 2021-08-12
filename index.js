
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise';
import reducers from './store/reducers/index'
import App from './src/App';
import React from 'react';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeWithMiddleware = createStore(
    reducers,
    composeEnhancers(applyMiddleware(promiseMiddleware))
);
const provider = () => (
        <Provider store={storeWithMiddleware}>
            <App />
        </Provider>
)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(provider);
