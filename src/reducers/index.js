import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";
import SearchReducer from "./reducer_search";

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  search: SearchReducer
});

export default rootReducer;
