import { createStore } from "redux";
import reducers from "./reducers";

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, enhancer);

export default store;
