import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import middlewareAPI from "./middleware/middlewareAPI";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(
    thunk,
    middlewareAPI
  ))
)

export default store;
