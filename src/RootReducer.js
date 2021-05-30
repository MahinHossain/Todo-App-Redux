import { combineReducers } from "redux";
import CounterReducer from "./redux/reducer/CounterReducer";

const rootReducer = combineReducers({
  counterreducer: CounterReducer,
});

export default rootReducer;
