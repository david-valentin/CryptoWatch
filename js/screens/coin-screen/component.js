import React from 'react';
import { ScrollView, View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style.js';
import CoinCard from './CoinCard';

/**
  * Presents a listview of the coin name and coin price
*/
class Coins extends React.Component {
  constructor(props) {
    super(props);
    // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }


  _createCoinCards() {
    const {coin_data} = this.props;
    // alert(JSON.stringify(coin_data.data));
    // console.log(coin_data);
    // return coin_data.data.map((coin) => {
    //   <Text>Hello World </Text>
    // })
    return coin_data.data.map(coin => (
      <CoinCard
        name = {coin.name}
        symbol = {coin.symbol}
        price = {coin.quotes['USD'].price}
        />
    ));
  }


  render(props) {
    return (
      <ScrollView>
        <View style={styles.container}>
            {this._createCoinCards()}
        </View>
      </ScrollView>
    );
  }
}


export default Coins;
