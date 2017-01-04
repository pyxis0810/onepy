import React, { Component } from 'react';

class Dreamstep extends Component {
  render() {
    return(
      <div className="dreamstep">
        <div className="mdl-grid full-grid">
          <div className="mdl-cell mdl-cell--12-col vertical-align center-text">
            <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--12-col">
              <div className="onepy onepy-dream-step"></div>
              <div className="sub-title">
                1PY는 젊은 창업가와 실버 창업가와 함께하는 마이크로 창업 교육 솔루션을 제공합니다.
              </div>
            </div>
            <div className="mdl-grid full-grid">
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--2-col step">
                <div className="onepy onepy-dream-step-1"></div>
                <div className="description">
                  <div>1.창업희망자 모집</div>
                  <div>마이크로 창업 희망자 모집</div>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--2-col step">
                <div className="onepy onepy-dream-step-2"></div>
                <div className="description">
                  <div>2.한평의꿈 교육</div>
                  <div>멘토링 그룹에 의한 플랫폼 운영 교육</div>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--2-col step">
                <div className="onepy onepy-dream-step-3"></div>
                <div className="description">
                  <div>3.한평플랫폼 현장실습</div>
                  <div>1개월 현장 교육 프로그램 연계 한평플랫폼에서 실습</div>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--2-col step">
                <div className="onepy onepy-dream-step-4"></div>
                <div className="description">
                  <div>4.한평플랫폼 시범운영</div>
                  <div>실습교육완료 후 시범 운영 지원</div>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--2-col step">
                <div className="onepy onepy-dream-step-5"></div>
                <div className="description">
                  <div>5.한평플랫폼 창업</div>
                  <div>성공적 1인 창업 안정적 운영</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = Dreamstep;