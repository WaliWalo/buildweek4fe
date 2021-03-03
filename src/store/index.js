import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import errorsReducer from "../reducers/errors";
import conversationsReducer from "../reducers/conversations";
import messagesReducer from "../reducers/messages";
import selectedConvoReducer from "../reducers/selectedConvo";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  errors: [],
  user: null,
  users: [],
  posts: [],
  conversations: [],
  messages: [],
  selectedConvo: null,
};

const allReducers = combineReducers({
  errors: errorsReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  selectedConvo: selectedConvoReducer,
});

export default function configureStore() {
  return createStore(
    allReducers,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
