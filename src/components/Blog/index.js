import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from 'store';

import { getBlog } from 'actions/blog';

class Blog extends Component {
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
      return (
        <div className="mdl-cell mdl-cell--12-phone mdl-cell--6-tablet mdl-cell--3-desktop">
          <div className="onepy-card mdl-card mdl-shadow--2dp" key={item.guid}>
            <div className="mdl-card__title">
              <h5 className="mdl-card__title-text">{item.title}</h5>
            </div>
            <div className="mdl-card__media">

            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return(
      <div className="blog">
        <div className="mdl-grid full-grid">
          <div className="mdl-cell mdl-cell--1-offset-desktop mdl-cell--2-col-phone mdl-cell--8-col-tablet mdl-cell--10-col-desktop vertical-align center-text">
              {this.renderBlogs()}
          </div>
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = connect(Blog.store, { getBlog })(Blog);
