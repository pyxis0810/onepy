import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return(
      <div className="intro">
        <div className="container-fluid vertical-center">
          <div className="row justify-content-center full-width">
            <div className="col-xs-12 col-md-4 col-lg-4 top">
              젋은 <b>창업</b><br/>
              안전한 <b>세컨잡</b><br/>
              확실한 <b>투자</b>
            </div>
            <div className="col-xs-12 col-md-4 col-lg-4 middle">
              <div className="onepy onepy-symbol symbol"></div>
            </div>
            <div className="col-xs-12 col-md-4 col-lg-4 bottom">
              <div>
                평에서 <b>시작하자!</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = Intro;
