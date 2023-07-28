import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import MapBoxGL from '@rnmapbox/maps';

MapBoxGL.setAccessToken(process.env.MAPBOX_API);
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

const locations = [
  {
    id: '1',
    coordinates: [18.4075, 43.8553]
  },
  {
    id: '2',
    coordinates: [18.4166814987, 43.8586220754]
  },
  {
    id: '3',
    coordinates: [18.40793, 43.85829]
  },
]

const Map = () => {

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapBoxGL.MapView style={styles.map} styleJSON={JSON.stringify(defaultStyle)}>
          <MapBoxGL.Camera zoomLevel={11} centerCoordinate={[18.413029, 43.856430]} />
          {locations.map(location => (
            <MapBoxGL.PointAnnotation key={location.id} id={location.id} coordinate={[location.coordinates[0], location.coordinates[1]]}  />
          ))}
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

export default Map
