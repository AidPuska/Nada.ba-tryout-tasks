import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import MapBoxGL from '@rnmapbox/maps';

MapBoxGL.setAccessToken('pk.eyJ1IjoiYWlkcHVza2EiLCJhIjoiY2w5cjk3b204MGVhejN1bzd4bjV0bGRzeSJ9.b3U1oVckpLq5tLd9SzmGkw');
MapBoxGL.setConnected(true);

const defaultStyle = {
  version: 8,
  name: 'Land',
  sources: {
    map: {
      type: 'raster',
      tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      minzoom: 1,
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'background',
      type: 'background',
      paint: {
        'background-color': '#f2efea',
      },
    },
    {
      id: 'map',
      type: 'raster',
      source: 'map',
      paint: {
        'raster-fade-duration': 100,
      },
    },
  ],
};

const App = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapBoxGL.MapView style={styles.map} styleJSON={JSON.stringify(defaultStyle)}>
          <MapBoxGL.Camera zoomLevel={11} centerCoordinate={[18.413029, 43.856430]} />
        </MapBoxGL.MapView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%'
  },
  container: {
    backgroundColor: "tomato",
    width: '100%',
    height: '100%'
  },
  map: {
    flex: 1,
  }
});

export default App