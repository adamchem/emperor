import React, { Component } from 'react';

import Footer from '../containers/footer';
import EmperorList from '../containers/main-list';
import EmperorDetail from '../containers/main-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <EmperorList />
          <EmperorDetail />
        </div>
        <Footer />
      </div>
    );
  }
}