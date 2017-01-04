import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from 'store';

import { getBlog } from 'actions/blog';

class Info extends Component {
  static store(state) {
    return {
        blog: state.blog
    };
  }

  componentWillMount() {
    const { getBlog } = this.props;
    getBlog();
  }

  renderBlogs = () => {
    const blogs = store.getState().blog;

    if (!blogs) {
      return null;
    }
    return blogs.map((item) => {
      const date = new Date(item.pubDate[0]).toISOString().slice(0,10);
      return (
        <div key={item.guid[0]}><a href={item.link[0]} target="_blank">{item.title}<span className="date">({date})</span></a></div>
      )
    })
  }

  render() {
    return(
      <div className="info">
        <div className="mdl-grid full-grid">
          <div className="mdl-cell mdl-cell--12-col vertical-align center-text">
            <div className="mdl-grid full-grid info-boxes">
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--5-col info-box">
                <div className="sub-title">About Us</div>
                <div className="onepy onepy-logo logo"></div>
              </div>
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--5-col info-box blog">
                {this.renderBlogs()}
              </div>
            </div>
          </div>
        </div>
        <div className="mdl-grid footer">
          <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--6-col">
            <div className="mdl-grid full-grid">
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--8-col onepy-address">
                (주)한평의꿈 대표: 김민순   주소: 서울시 은평구 통일로 684 1동 602-A<br />
                사업자등록번호: 459-86-00206   대표번호: 1800-0713<br />
                Copyrightⓒ 1py Inc. All rights reserved.
              </div>
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--4-col onepy-hours">
                AM 10:00<br />
                PM 07:00<br />
                상담시간
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--6-col right-text">
            <span className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--4-col onepy-tel"><a href="tel:18000713">1800-0713</a></span>
            <span className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--4-col onepy onepy-logo"></span>
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = connect(Info.store, { getBlog })(Info);
