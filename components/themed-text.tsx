import React from 'react';
import { StyleSheet, Text, type TextProps } from 'react-native';

import { Fonts, FontSizes } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  adjustsFontSizeToFit?: boolean;
  maxFontSizeMultiplier?: number;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  adjustsFontSizeToFit = false,
  maxFontSizeMultiplier = 1.5,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      numberOfLines={type === 'title' ? 2 : undefined} // Max 2 Zeilen für Titel
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: FontSizes.normal,
    lineHeight: 24,
    fontFamily: Fonts.regular,
  },
  defaultSemiBold: {
    fontSize: FontSizes.normal,
    lineHeight: 24,
    fontFamily: Fonts.regular,
    fontWeight: '600',
  },
  title: {
    fontSize: 60, // Maximale Größe
    fontFamily: Fonts.momo,
    textAlign: 'center', // Wichtig für gleichmäßige Anpassung
    includeFontPadding: false, // Präzisere Größenanpassung
  },
  subtitle: {
    fontSize: FontSizes.xlarge,
    fontFamily: Fonts.momo,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: FontSizes.normal,
    color: '#0a7ea4',
    fontFamily: Fonts.regular,
  },
});