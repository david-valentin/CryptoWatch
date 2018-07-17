import React, { Component } from 'react';

import LoadingScreen from './components/loading'
import Coins from './component.js'

class CoinScreenContainer extends React.Component {


  componentDidMount() {

  }

  render() {
    const loading = false;
    if (loading) {
      return <LoadingScreen />;
    }
    return <Coins />;
  }
}

export default CoinScreenContainer;
