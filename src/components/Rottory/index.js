import React, { Component } from 'react';

class Rottory extends Component {
  render() {
    return(
      <div className="rottory">
        <div className="container-fluid vertical-center">
          <div className="row flex-items-xs-center full-width">
            <div className="col-xs-12 col-sm-10">
              <div className="col-xs-12">
                <div className="onepy onepy-rottory-kitchen title"></div>
                <div className="sub-title">
                  로토리키친은 국내 최고 푸드트럭 전문가 집단입니다. <br/>
                  로토리키친은 케이터링 서비스 선택의 가장 좋은 방법 중 하나입니다.
                </div>
              </div>
              <div className="row flex-items-xs-center brands">
                <div className="col-xs-6 col-md-4 col-lg-2 brand">
                  <div className="onepy onepy-big-island"></div>
                </div>
                <div className="col-xs-6 col-md-4 col-lg-2 brand">
                  <div className="onepy onepy-tokyo-steak"></div>
                </div>
                <div className="col-xs-6 col-md-4 col-lg-2 brand">
                  <div className="onepy onepy-ho-ong"></div>
                </div>
                <div className="col-xs-6 col-md-4 col-lg-2 brand">
                  <div className="onepy onepy-kara-aze"></div>
                </div>
                <div className="col-xs-6 col-md-4 col-lg-2 brand">
                  <div className="onepy onepy-jerk-truck"></div>
                </div>
                <div className="col-xs-6 col-md-4 col-lg-2 brand">
                  <div className="onepy onepy-vegas-taco"></div>
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
