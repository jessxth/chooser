import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ThemedView style={styles.mainBody}>
      <ThemedText type="title">Einstellungen</ThemedText>
      
      <ThemedText>Blub</ThemedText>
    </ThemedView>
    )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  mainBody: {
    width: width,
    height: height,
    paddingVertical: height*0.1,
    paddingHorizontal: width*0.07,
  }
});
