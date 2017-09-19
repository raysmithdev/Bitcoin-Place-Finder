import React from 'react'
import { MapView } from 'expo'
import BitcoinImg from '../../assets/bitcoin-coin.png'

const Map = ({ location, venues }) => (
  <MapView
   style={{ flex: 1 }}
   initialRegion={{
     latitude: location.coords.latitude,
     longitude: location.coords.longitude,
     latitudeDelta: 0.0922,
     longitudeDelta: 0.0421,
   }}
   showsUserLocation={true}
 >
   {venues.map(venue => (
     <MapView.Marker
        key={venue.id}
        coordinate={{ latitude: venue.lat, longitude: venue.lon }}
        image={BitcoinImg}
        title={venue.name}
        style={{height: 100}}
      />
   ))}
</MapView>
)

export default Map
