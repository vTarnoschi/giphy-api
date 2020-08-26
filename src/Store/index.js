import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "../Redux";
import sagas from "../Sagas";

const sagaMiddleware = createSagaMiddleware();

export default function getStore() {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(sagas);

  return store;
}
