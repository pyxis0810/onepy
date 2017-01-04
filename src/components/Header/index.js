import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <span className="onepy onepy-logo"></span>
        <a href="tel:18000713"><span className="contact">가맹신청</span></a>
      </div>
    );
  }
}

module.exports.default = module.exports = Header;
