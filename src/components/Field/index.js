import React, { Component } from 'react';

class Field extends Component {
  render() {
    return(
      <div className="fields">
        <div className="mdl-grid full-grid">
          <div className="mdl-cell mdl-cell--12-col vertical-align center-text">
            <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--12-col">
              <div className="title">사업 영역</div>
              <div className="sub-title">
                1PY는 젊은 창업가와 실버 창업가와 함께하는 다양한 교육 솔루션을 제공합니다.
              </div>
            </div>
            <div className="mdl-grid full-grid">
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--3-col field">
                <div className="onepy onepy-dream-step field-1"></div>
                <div className="description">
                  <div>마이크로 창업교육</div>
                  <div>서비스 사업</div>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--3-col field">
                <div className="onepy onepy-rottory-kitchen field-2"></div>
                <div className="description">
                  <div>푸드트럭 케이터링</div>
                  <div>서비스 사업</div>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--3-col field">
                <div className="onepy onepy-platform field-3"></div>
                <div className="description">
                  <div>마이크로 창업플랫폼</div>
                  <div>컨설팅 사업</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = Field;
