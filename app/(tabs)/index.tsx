import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.mainBody}>
      <Text style={styles.h1}>was geht yallah</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    width: width,                  // volle Bildschirmbreite
    height: height,                // volle Bildschirmhöhe
    paddingVertical: height * 0.1, // 20% der Bildschirmhöhe
    paddingHorizontal: width * 0.1, // 10% der Bildschirmbreite
    backgroundColor: '#2f2f2f',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  h1: {
    fontSize: 30,
    fontWeight: '900',
    color: '#ffffff',
  },
});
