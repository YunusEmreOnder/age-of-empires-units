import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import unitsReducer from './reducers/unitsReducer'
import unitDetailsReducer from './reducers/unitDetailsReducer'
import costsReducer from './reducers/costsReducer'
import agesReducer from './reducers/agesReducer'
import pageTitleReducer from './reducers/pageTitleReducer'

import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';

let sagaMiddleware = createSagaMiddleware(logger);
let middleware = applyMiddleware(logger, sagaMiddleware);
const rootReducer = combineReducers({
  units: unitsReducer,
  unitDetails: unitDetailsReducer,
  costs: costsReducer,
  ages: agesReducer,
  pageTitle: pageTitleReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  middleware
));
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}>< App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();