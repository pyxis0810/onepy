import React, { Component } from 'react';

class Field extends Component {
  render() {
    return(
      <div className="fields align-items-center">
        <div className="container-fluid full-width">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-10">
              <div className="col-12">
                <div className="title">사업 영역</div>
                <div className="sub-title">
                  1PY는 젊은 창업가와 실버 창업가와 함께하는 다양한 교육 솔루션을 제공합니다.
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-4 col-lg-3">
                  <a href="#dreamstep">
                    <div className="field-1">
                      <div className="onepy onepy-dream-step field-symbol-1"></div>
                      <div className="description">
                        <div>마이크로 창업교육</div>
                        <div>서비스 사업</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <a href="#rottory">
                    <div className="field-2">
                      <div className="onepy onepy-rottory-kitchen field-symbol-2"></div>
                      <div className="description">
                        <div>푸드트럭 케이터링</div>
                        <div>서비스 사업</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <a href="#platform">
                    <div className="field-3">
                      <div className="onepy onepy-platform field-symbol-3"></div>
                      <div className="description">
                        <div>마이크로 창업플랫폼</div>
                        <div>컨설팅 사업</div>
                      </div>
                    </div>
                  </a>
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
