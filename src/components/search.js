import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import searchReducer from "../reducers/reducer_search";
import { withReducer } from "../withReducer";

class Search extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <h3>THIS IS SEARCH PAGE</h3>
        <h6>{this.props.search.msg}</h6>
      </div>
    );
  }
}

export default withReducer("search", searchReducer)(
  connect(({ search }) => ({ search }))(Search)
);
