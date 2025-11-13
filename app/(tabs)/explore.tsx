import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();

  return (
    <ThemedView style={styles.mainBody}>
      <ThemedText type="title" adjustsFontSizeToFit={true} maxFontSizeMultiplier={1.2}>
        Explore
        </ThemedText>
      <ThemedText>Was geht yallah</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  wheelWrapper: {
    marginVertical: 60, // Feste Pixel-Werte statt Prozent
    // oder:
    // marginVertical: height * 0.3, // Prozent mit useWindowDimensions
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  mainBody: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  h1: {
    marginBottom: 10,
  }
});