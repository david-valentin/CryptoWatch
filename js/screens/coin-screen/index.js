import React, { Component } from 'react';
import { ScrollView, View, Text, } from 'react-native';
import LoadingScreen from './components/loading'
import Coins from './component.js'

class CoinScreenContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      loading : true,
      coin_data : []
    }
  }

  componentDidMount() {
    const coinAPIBaseURL = 'https://api.coinmarketcap.com/v2/ticker/?limit=10&structure=array';
    fetch(coinAPIBaseURL)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      this.setState({loading: false, coin_data : responseJson});
    })
    .catch(e => console.error(e));

  }

  render() {
    const {loading, coin_data} = this.state;
    if (loading) {
      return <LoadingScreen />;
    }
    return <Coins coin_data={coin_data}/>
  }
}

export default CoinScreenContainer;
