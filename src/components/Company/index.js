import React, { Component } from 'react';

class Company extends Component {
  render() {
    return(
      <div className="company">
        <div className="mdl-grid full-grid">
          <div className="mdl-cell mdl-cell--1-offset-phone mdl-cell--1-offset-tablet mdl-cell--2-offset-desktop mdl-cell--2-col-phone mdl-cell--6-col-tablet mdl-cell--8-col-desktop vertical-align center-text">
              <div className="onepy onepy-logo logo"></div>
              <div className="sub-title">
                (주)한평의꿈은 1평을 플랫폼으로 취약계층의 마이크로 창업을 돕는 서울시 예비사회적기업입니다.
              </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = Company;
