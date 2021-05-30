import thunk from "redux-thunk";
import { bindActionCreators } from "redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../../RootReducer";
const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];

const composedEnhancers = composeWithDevTools(...enhancers);

export default function Store(previousState) {
  const Store = createStore(
    rootReducer,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    previousState,
    composedEnhancers
  );
  return Store;
}
