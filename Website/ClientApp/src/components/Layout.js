import React, { Component } from "react";
import Navigation from "./Navigation";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Navigation>{this.props.children}</Navigation>
      </div>
    );
  }
}
