import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
import { watchSagas } from "./sagas";
const saga = createSagaMiddleware();
//redux dev tool
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(saga, logger));

const store = createStore(reducers, enhancer);

saga.run(watchSagas);

export default store;
