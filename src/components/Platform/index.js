import React, { Component } from 'react';

class Platform extends Component {
  render() {
    return(
      <div className="platform">
        <div className="mdl-grid full-grid">
          <div className="mdl-cell mdl-cell--12-col vertical-align center-text">
            <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--12-col">
              <div className="onepy onepy-platform"></div>
              <div className="sub-title">
                1PLATFORM™은 한평의꿈의 노하우를 바탕으로 마이크로 창업 플랫폼의 제작, 디자인, 컨설팅을 도와주는 서비스입니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = Platform;
