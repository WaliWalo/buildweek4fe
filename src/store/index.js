import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import errorsReducer from "../reducers/errors";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  errors: [],
  user: null,
  users: [],
  posts: [],
  conversations: [],
  messages: [],
};

const allReducers = combineReducers({
  errors: errorsReducer,
});

export default function configureStore() {
  return createStore(
    allReducers,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}