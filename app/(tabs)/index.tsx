import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import Wheel from '@/components/wheel';
import { Fonts } from '@/constants/theme'; // DIESE ZEILE FEHLT NOCH
import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();

  return (
    <ThemedView style={styles.mainBody}>
      <ThemedText type="title" adjustsFontSizeToFit={true} maxFontSizeMultiplier={1.2}>GLÜCKSRAD</ThemedText>
      <View style={styles.wheelWrapper}>
        <Wheel size={200} />
      </View>
      <ThemedText>Optionen hinzufügen und drehen!</ThemedText>
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
    fontFamily: Fonts.momo,
  }
});