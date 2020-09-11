import React from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
