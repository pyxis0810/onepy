import React, { Component } from 'react';

class Dreamstep extends Component {
  render() {
    return(
      <div className="dreamstep">
        <div className="container-fluid vertical-center">
          <div className="row flex-items-xs-center full-width">
            <div className="col-xs-11 col-sm-6 col-lg-4">
              <div className="dream-step">
                <img src={require('images/logo-dream-step@4x.png')} />
              </div>
            </div>
            <div className="col-xs-12">
              <div className="sub-title">
                1PY는 젊은 창업가와 실버 창업가와 함께하는 마이크로 창업 교육 솔루션을 제공합니다.
              </div>
            </div>
            <div className="col-xs-12">
              <div className="row flex-items-xs-center">
                <div className="col-xs-11 col-sm-10 col-lg-2 step">
                  <div className="icon">
                    <img src={require('images/icon-step-1@4x.png')} />
                  </div>
                  <div className="description">
                    <div className="bold">1.창업희망자 모집</div>
                    <div>마이크로 창업 희망자 모집</div>
                  </div>
                </div>
                <div className="col-xs-11 col-sm-10 col-lg-2 step">
                  <div className="icon">
                    <img src={require('images/icon-step-2@4x.png')} />
                  </div>
                  <div className="description">
                    <div className="bold">2.한평의꿈 교육</div>
                    <div>멘토링 그룹에 의한 플랫폼 운영 교육</div>
                  </div>
                </div>
                <div className="col-xs-11 col-sm-10 col-lg-2 step">
                  <div className="icon">
                    <img src={require('images/icon-step-3@4x.png')} />
                  </div>
                  <div className="description">
                    <div className="bold">3.한평플랫폼 현장실습</div>
                    <div>1개월 현장 교육 프로그램 연계 한평플랫폼에서 실습</div>
                  </div>
                </div>
                <div className="col-xs-11 col-sm-10 col-lg-2 step">
                  <div className="icon icon-fix">
                    <img src={require('images/icon-step-4@4x.png')} />
                  </div>
                  <div className="description">
                    <div className="bold">4.한평플랫폼 시범운영</div>
                    <div>실습교육완료 후 시범 운영 지원</div>
                  </div>
                </div>
                <div className="col-xs-11 col-sm-10 col-lg-2 step">
                  <div className="icon">
                    <img src={require('images/icon-step-5@4x.png')} />
                  </div>
                  <div className="description">
                    <div className="bold">5.한평플랫폼 창업</div>
                    <div>성공적 1인 창업 안정적 운영</div>
                  </div>
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
