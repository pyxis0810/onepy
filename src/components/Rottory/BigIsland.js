import React, { Component } from 'react';

class BigIsland extends Component {
  render() {
    return(
      <div className="bigisland">
        <div className="container-fluid vertical-center">
          <div className="row flex-items-xs-center full-width">
            <div className="col-xs-12 col-lg-5 align-center">
              <div className="row flex-items-xs-center">
                <div className="col-xs-6">
                  <div className="big-island">
                    <img src={require('images/logo-big-island@4x.png')} />
                  </div>
                  <div className="title">
                    하와이안 푸드<br/>
                    {'<더빅아일랜드>'}
                  </div>
                  <div className="sub-title">
                    계절에 맞는 야채와<br/>
                    싱싱한 새우, 신선한 소고기<br/>
                    그리고 파인애플과 토마토<br/>
                    하와이 현지 맛 그대로!
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-lg-5">
              <div className="row flex-items-xs-center">
                <div className="col-xs-6 col-sm-3 col-lg-6 ref">
                    <img src={require('images/rottory-ref-1.jpg')} />
                </div>
                <div className="col-xs-6 col-sm-3 col-lg-6 ref">
                    <img src={require('images/rottory-ref-2.jpg')} />
                </div>
                <div className="col-xs-6 col-sm-3 col-lg-6 ref">
                    <img src={require('images/rottory-ref-3.jpg')} />
                </div>
                <div className="col-xs-6 col-sm-3 col-lg-6 ref">
                    <img src={require('images/rottory-ref-4.jpg')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = BigIsland;
