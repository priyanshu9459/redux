import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

// Create the store with middleware
export  const store = createStore(reducers, applyMiddleware(thunk));

