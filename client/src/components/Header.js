import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false: {
        return (
          <li>
            <a href="auth/google">Login With GOOGLE</a>
          </li>
        );
      }
      default: {
        return <li><a href="api/logout">LOGOUT</a></li>;
      }
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapsStateToProps({ auth }) {
  return { auth };
}

export default connect(mapsStateToProps)(Header);
