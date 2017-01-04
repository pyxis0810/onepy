import React, { Component } from 'react';

class Rottory extends Component {
  render() {
    return(
      <div className="rottory">
        <div className="mdl-grid full-grid">
          <div className="mdl-cell mdl-cell--12-col vertical-align center-text">
            <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--12-col step">
              <div className="onepy onepy-rottory-kitchen symbol"></div>
              <div className="sub-title">
                로토리키친은 국내 최고 푸드트럭 전문가 집단입니다. <br/>
                로토리키친은 케이터링 서비스 선택의 가장 좋은 방법 중 하나입니다.
              </div>
            </div>
            <div className="mdl-grid full-grid brands">
              <div className="mdl-cell mdl-cell--2-col-phone mdl-cell--4-col-tablet mdl-cell--2-col brand">
                <div className="onepy onepy-big-island"></div>
              </div>
              <div className="mdl-cell mdl-cell--2-col-phone mdl-cell--4-col-tablet mdl-cell--2-col brand">
                <div className="onepy onepy-tokyo-steak"></div>
              </div>
              <div className="mdl-cell mdl-cell--2-col-phone mdl-cell--4-col-tablet mdl-cell--2-col brand">
                <div className="onepy onepy-ho-ong"></div>
              </div>
              <div className="mdl-cell mdl-cell--2-col-phone mdl-cell--4-col-tablet mdl-cell--2-col brand">
                <div className="onepy onepy-kara-aze"></div>
              </div>
              <div className="mdl-cell mdl-cell--2-col-phone mdl-cell--4-col-tablet mdl-cell--2-col brand">
                <div className="onepy onepy-jerk-truck"></div>
              </div>
              <div className="mdl-cell mdl-cell--2-col-phone mdl-cell--4-col-tablet mdl-cell--2-col brand">
                <div className="onepy onepy-vegas-taco"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = Rottory;
