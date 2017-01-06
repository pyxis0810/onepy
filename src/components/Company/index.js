import React, { Component } from 'react';

class Company extends Component {
  render() {
    return(
      <div className="company">
        <div className="container-fluid vertical-center">
          <div className="row flex-items-xs-center full-width">
            <div className="col-xs-10 col-md-6 col-lg-4 center-text box">
                <div className="onepy onepy-logo logo"></div>
                <div className="sub-title">
                  (주)한평의꿈은 1평을 플랫폼으로 취약계층의 마이크로 창업을 돕는 서울시 예비사회적기업입니다.
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = Company;
