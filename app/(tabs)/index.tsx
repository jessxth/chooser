import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import Wheel from '@/components/wheel'; // Import hinzufügen - Pfad anpassen falls nötig
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ThemedView style={styles.mainBody}>
      <ThemedText type="title" style={styles.h1}>Glücksrad</ThemedText>
      <Wheel />
      <ThemedText>Optionen hinzufügen und drehen!</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  mainBody: {
    flexDirection: 'column',
    alignItems: 'center', 
    width: width,
    height: height,
    paddingVertical: height*0.1,
    paddingHorizontal: width*0.07,
  },
  h1: {
    marginBottom: height*0.01
  }
});