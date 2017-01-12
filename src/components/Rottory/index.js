import React, { Component } from 'react';

class Rottory extends Component {
  render() {
    return(
      <div className="rottory align-items-center">
        <div className="container-fluid full-width">
          <div className="row justify-content-center">
            <div className="col-8 col-sm-4 col-lg-3">
              <div className="rottory-kitchen">
                <img src={require('images/logo-rottory-kitchen@4x.png')} />
              </div>
            </div>
            <div className="col-10">
              <div className="sub-title">
                로토리키친은 국내 최고 푸드트럭 전문가 집단입니다.
                로토리키친은 케이터링 서비스 선택의 가장 좋은 방법 중 하나입니다.
              </div>
            </div>
            <div className="col-10 col-sm-8 col-lg-10">
              <div className="row justify-content-center brands">
                <div className="col-6 col-md-4 col-lg-2 brand">
                  <div className="icon">
                    <img src={require('images/logo-big-island@4x.png')} />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2 brand">
                  <div className="icon">
                    <img src={require('images/logo-tokyo-steak@4x.png')} />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2 brand">
                  <div className="icon">
                    <img src={require('images/logo-ho-ong@4x.png')} />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2 brand">
                  <div className="icon">
                    <img src={require('images/logo-kara-aze@4x.png')} />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2 brand">
                  <div className="icon">
                    <img src={require('images/logo-jerk-truck@4x.png')} />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2 brand">
                  <div className="icon">
                    <img src={require('images/logo-vegas-taco@4x.png')} />
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

module.exports.default = module.exports = Rottory;
