import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducers";
import sagas from "./sagas";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composedEnhancers(applyMiddleware(...middleware, logger))
);
sagaMiddleware.run(sagas);

export default store;
