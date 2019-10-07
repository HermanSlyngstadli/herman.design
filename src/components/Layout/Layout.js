import React, { Component } from "react";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import styles from "./Layout.module.scss";

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.grid}>{this.props.children}</div>
        <Footer />
      </>
    );
  }
}

export default Layout;
