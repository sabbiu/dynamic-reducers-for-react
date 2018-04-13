import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import createReducer from "./reducers";

const initializeStore = () => {
  const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
  const store = createStoreWithMiddleware(
    createReducer(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };
  return store;
};

export default initializeStore;
