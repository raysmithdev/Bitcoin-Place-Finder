import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Constants, Location, Permissions } from 'expo'
import Map from './Map'

class Dashboard extends Component {

  static navigationOptions = {
    title: 'Splash',
  }

  state = {
    location: null,
    errorMessage: null,
    loading: true,
    venues: []
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});

    let url = `https://coinmap.org/api/v1/venues?lat2=${location.coords.latitude}&lon2=${location.coords.latitude}`

    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(json => this.setState({ location, loading: false, venues: json.venues }))


  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? <Text>Loading</Text> :
          <Map {...this.state}/>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
})

export default Dashboard
