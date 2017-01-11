import React, { Component } from 'react';

class Design extends Component {
  render() {
    return(
      <div className="platform-design">
        <div className="container-fluid vertical-center">
          <div className="row flex-items-xs-center full-width">
            <div className="col-xs-12 col-lg-5 align-center">
              <div className="row flex-items-xs-center">
                <div className="col-xs-6">
                  <div className="big-island">
                    <img src={require('images/logo-platform-c@4x.png')} />
                  </div>
                  <div className="title">
                    DESIGN<br />YOUR FOODTRUCK
                  </div>
                  <div className="sub-title">
                    밤도깨비야시장 베스트 푸드트럭<br />
                    1PLATFORM™에서<br />
                    당신의 트럭을 디자인하세요.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-lg-5">
              <div className="row flex-items-xs-center">
                <div className="col-xs-12 ref">
                    <img src={require('images/platform-ref-1.jpg')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = Design;
