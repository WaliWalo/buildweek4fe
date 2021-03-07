import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import errorsReducer from "../reducers/errors";

import userReducer from "../reducers/user";

import conversationsReducer from "../reducers/conversations";
import messagesReducer from "../reducers/messages";
import selectedConvoReducer from "../reducers/selectedConvo";
import postsReducer from "../reducers/posts";
import selectedPostReducer from "../reducers/selectedPost";
import searchReducer from "../reducers/searchReducer";

import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  error: {},
  user: null,
  users: [],
  posts: [],
  conversations: [],
  messages: [],
  search: null, //new
  selectedConvo: null,
  selectedPost: null,
};

const allReducers = combineReducers({
  error: errorsReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  selectedConvo: selectedConvoReducer,
  user: userReducer,
  posts: postsReducer,
  selectedPost: selectedPostReducer,
  search: searchReducer,
});

export default function configureStore() {
  return createStore(
    allReducers,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
