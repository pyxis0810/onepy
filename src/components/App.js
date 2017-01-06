import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import store from 'store';

window.$ = window.jQuery = require('jquery');
require('fullpage.js/vendors/jquery.easings.min.js');
require('fullpage.js/vendors/scrolloverflow.min.js');
require('fullpage.js/dist/jquery.fullPage.js');

import { getLocale } from 'actions/locale';

import Header from './Header';
import Intro from './Intro';
import Company from './Company';
import Field from './Field';
import Dreamstep from './Dreamstep';
import Rottory from './Rottory';
import Platform from './Platform';
import Instagram from './Instagram';
import Info from './Info';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';
addLocaleData([...en, ...ko]);

import msg_en from 'locales/en';
import msg_ko from 'locales/ko';

const messages = {
  en: msg_en,
  ko: msg_ko
}

require('onepy.font.js');

class App extends Component {
  static store(state) {
    return {
        locale: state.locale
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      locale: '',
    }

    store.subscribe(() => {
      this.setState({
        locale: store.getState().locale
      });
    });
  }

  componentWillMount() {
    const { getLocale } = this.props;
    getLocale();
  }

  /* eslint no-undef:0 */
  componentWillUpdate() {
    const { fullpage }  = this.refs;
    if (fullpage && !this.state.init) {
      if (typeof $.fn.fullpage.destroy == 'function') {
        $.fn.fullpage.destroy('all');
      }
      $(fullpage).fullpage({
        sectionsColor: ['#333946', '#757575', '#1D1D1B', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#AFB6BD'],
        sectionSelector: '.section',
        slideSelector: '.slide',
        verticalCentered: false
      });
      this.setState({ init: true });
    }
  }

  changeLocale = (locale) => {
    this.setState({ locale });
  }

  render() {
    const { children } = this.props;
    const { locale } = this.state;

    if ( !locale || locale === '' ) { return null; }

    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={messages[locale]}
      >
        <div>
          <Header />
          { children || (
            <div id="fullpage" ref="fullpage">
              <div className="section"><Intro /></div>
              <div className="section"><Company /></div>
              <div className="section"><Field /></div>
              <div className="section"><Dreamstep /></div>
              <div className="section"><Rottory /></div>
              <div className="section"><Platform /></div>
              <div className="section"><Instagram /></div>
              <div className="section"><Info /></div>
            </div>
          )}
        </div>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
}

module.exports.default = module.exports = connect(App.store, { getLocale })(App);
