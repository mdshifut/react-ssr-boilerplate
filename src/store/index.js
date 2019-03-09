import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const middlewares = [thunk];
export default (initialState, window) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
};
