import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import "./layout.css"
import ConnectedThemeProvider from './ThemeProvider';

const Layout = ({ children }) => (
  <React.Fragment>

    <ConnectedThemeProvider>
      <Header  />
      {children}
    </ConnectedThemeProvider>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
