import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Search extends Component {
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

export default connect(({ search }) => ({ search }))(Search);
