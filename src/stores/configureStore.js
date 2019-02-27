// Redux provides us with a createStore function which takes the rootReducer and an initial state.
// Later we add a store middleware to even the way to a mature Redux application.
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';

/* The logger middleware shows us console output for each action: 
the previous state,
the action itself
and the next state.
It helps us to keep track of our state changes in our application. */
const logger = createLogger();

// The Redux store is aware of a middleware, which can be used to do something between dispatching an action and the moment it reaches the reducer.
//const createStoreWithMiddleware = applyMiddleware()(createStore);
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
