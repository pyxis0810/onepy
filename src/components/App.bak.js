import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import store from 'store';

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

import { SectionsContainer, Section } from 'react-fullpage';

let options = {
  activeClass:          'active',
  anchors:              ['intro', 'aboutus', 'field', 'dreamstep', 'rottory', 'platform', 'instagram', 'contactus'],
  arrowNavigation:      true,
  className:            'SectionContainer',
  delay:                1000,
  navigation:           true,
  scrollBar:            false,
  sectionClassName:     'Section',
  sectionPaddingTop:    '0',
  sectionPaddingBottom: '0',
  verticalAlign:        false
};

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
      locale: ''
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
            <SectionsContainer {...options}>
              <Section color="#333946">
                <Intro />
              </Section>
              <Section color="#757575">
                <Company />
              </Section>
              <Section color="#1D1D1B">
                <Field />
              </Section>
              <Section color="#FFFFFF">
                <Dreamstep />
              </Section>
              <Section color="#FFFFFF">
                <Rottory />
              </Section>
              <Section color="#FFFFFF">
                <Platform />
              </Section>
              <Section color="#000000">
                <Instagram />
              </Section>
              <Section color="#AFB6BD">
                <Info />
              </Section>
            </SectionsContainer>
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
