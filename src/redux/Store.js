import { createStore } from "redux";
import Reducer from "./Reducer";
// import { applyMiddleware } from "redux";
// import logger from "redux-logger";
// import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// const Rootreducer = combineReducers({
//   data : Reducer
// })
const store = createStore(Reducer,composeWithDevTools());
export default store;