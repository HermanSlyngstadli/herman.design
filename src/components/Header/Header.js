import React, { Component } from "react";

import { Navigation } from "../Navigation/Navigation";

import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <header>
        <Navigation />
      </header>
    );
  }
}

export default Header;
