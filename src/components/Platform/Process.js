import React, { Component } from 'react';

class Process extends Component {
  render() {
    return(
      <div className="platform-process align-items-center">
        <div className="container-fluid full-width">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="one-platform">
                    <img src={require('images/logo-platform@4x.png')} />
                    <span className="title">디자인 절차</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 col-md-9 col-lg-10">
              <div className="row justify-content-center">
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="field-1">
                    <div className="title">1</div>
                    <div className="description">
                      <div className="col-12">푸드트럭 디자인 상담</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="field-2">
                    <div className="title">2</div>
                    <div className="description">
                      <div className="row align-items-center justify-content-center">
                        <div className="col-12">푸드트럭 디자인 의뢰</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="field-3">
                    <div className="title">3</div>
                    <div className="description">
                      <div>디자인 시안 1차/2차 작업</div>
                      <div>1주일~2주일 소요</div>
                    </div>
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

module.exports.default = module.exports = Process;
