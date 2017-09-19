import React, { Component } from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import { Button } from 'react-native-elements'
import BitcoinImg from '../../assets/bitcoin-coin-128.png'

class Dashboard extends Component {

  static navigationOptions = { header: null }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Image
          source={BitcoinImg}
          style={{width: 100, height: 100}}
        />
        <Button
          style={styles.button}
          title='GET STARTED'
          backgroundColor="#3498db"
          onPress={() => navigate('Dashboard')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 50
  }
});

export default Dashboard
