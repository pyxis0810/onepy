import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return(
      <div className="intro">
        <div className="mdl-grid full-grid">
          <div className="mdl-cell mdl-cell--12-col vertical-align center-text">
            <div className="mdl-cell--12-col-phone mdl-cell--12-col-tablet top">
              젋은 <b>창업</b><br/>
              안전한 <b>세컨잡</b><br/>
              확실한 <b>투자</b>
            </div>
            <div className="mdl-cell--12-col-phone mdl-cell--12-col-tablet middle">
              <div className="onepy onepy-symbol symbol"></div>
            </div>
            <div className="mdl-cell--12-col-phone mdl-cell--12-col-tablet bottom">
              평에서 <b>시작하자!</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = Intro;
