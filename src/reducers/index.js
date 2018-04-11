import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";
import TestReducer from "./reducer_test";

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  test: TestReducer
});

export default rootReducer;
