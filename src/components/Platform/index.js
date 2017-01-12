import React, { Component } from 'react';

class Platform extends Component {
  render() {
    return(
      <div className="platform align-items-center">
        <div className="container-fluid full-width">
          <div className="row justify-content-center">
            <div className="col-11 col-sm-6 col-lg-4">
              <div className="one-platform">
                <img src={require('images/logo-platform@4x.png')} />
              </div>
            </div>
            <div className="col-12 col-lg-10">
              <div className="col-12">
                <div className="sub-title">
                  1PLATFORM™은 한평의꿈의 노하우를 바탕으로 마이크로 창업 플랫폼의 제작, 디자인, 컨설팅을 도와주는 서비스입니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = Platform;
