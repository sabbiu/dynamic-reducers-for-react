import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import initializeStore from "./store";
import PostsIndex from "./components/posts_index";

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

const AsyncSearch = props => (
  <DynamicImport load={() => import("./components/search")}>
    {Component =>
      Component === null ? <div>Loading...</div> : <Component {...props} />
    }
  </DynamicImport>
);

const store = initializeStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/posts/new" component={PostsNew} />
              <Route path="/search" component={AsyncSearch} />
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
