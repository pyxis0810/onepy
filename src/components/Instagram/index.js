import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from 'store';

// Actions
import { getInstagram } from 'actions/instagram';
import Gallery from 'utils/Gallery';

class Instagram extends Component {
  static store(state) {
    return {
        instagram: state.instagram
    };
  }

  componentWillMount() {
    const { getInstagram } = this.props;
    getInstagram();
  }

  renderInstagrams = () => {
    const instagrams = store.getState().instagram;

    if (instagrams.length === 0) {
      return [];
    }

    return instagrams.map((item) => {
      return {
        src: item.images.standard_resolution.url,
        thumbnail: item.images.standard_resolution.url,
        caption: 'test',
        orientation: 'square',
        useForDemo: true,
      };
    });
  }

  closeLightbox = () => {
    console.log('close');
  }

  render() {
    const images = this.renderInstagrams();

    if (!images || images.length === 0 ) {
      return null;
    }

    return(
      <div className="instagram">
        <div className="mdl-grid--no-spacing full-grid">
          <Gallery images={images} showThumbnails />
        </div>
      </div>
    );
  }
}

module.exports.default = module.exports = connect(Instagram.store, { getInstagram })(Instagram);
