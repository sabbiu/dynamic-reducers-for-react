import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {
  createDynamicMiddleware,
  createDynamicReducer
} from "redux-dynamic-registry";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import postReducer from "./reducers/reducer_posts";
// import reducers from "./reducers";
import PostsIndex from "./components/posts_index";

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const store = createStore(
  postReducer,
  applyMiddleware(promise, createDynamicMiddleware().middleware)
);

class DynamicImport extends Component {
  state = { component: null };
  componentDidMount() {
    this.props
      .load()
      .then(module => this.setState(() => ({ component: module.default })));
  }

  render() {
    return this.props.children(this.state.component);
  }
}

const PostsNew = props => (
  <DynamicImport load={() => import("./components/posts_new")}>
    {Component =>
      Component === null ? <div>Loading...</div> : <Component {...props} />
    }
  </DynamicImport>
);

const PostsShow = props => (
  <DynamicImport load={() => import("./components/posts_show")}>
    {Component =>
      Component === null ? <div>Loading...</div> : <Component {...props} />
    }
  </DynamicImport>
);

const Test = props => (
  <DynamicImport load={() => import("./components/test")}>
    {Component =>
      Component === null ? <div>Loading...</div> : <Component {...props} />
    }
  </DynamicImport>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/posts/new" component={PostsNew} />
              <Route path="/test" component={Test} />
              <Route path="/posts/:id" component={PostsShow} />
              <Route path="/" component={PostsIndex} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
