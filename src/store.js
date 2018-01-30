import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import * as reducer from "./ducks";
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__({
      name: "lukas-app"
    })) ||
  compose;

const initalState = {};

const rootReducer = combineReducers({
  ...reducer
});

const createStoreWithMiddleware = composeEnhancers()(createStore);

const Store = createStoreWithMiddleware(rootReducer, initalState);

export default Store;
