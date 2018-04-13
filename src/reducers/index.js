import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";

const createReducer = asyncReducers =>
  combineReducers({
    posts: PostsReducer,
    form: formReducer,
    ...asyncReducers
  });

export default createReducer;
