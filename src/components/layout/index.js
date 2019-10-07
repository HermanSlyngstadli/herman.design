import React, { Component } from "react";

import { Header } from "../header/";
import { Footer } from "../footer/";

import styles from "./Layout.module.scss";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.grid}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
