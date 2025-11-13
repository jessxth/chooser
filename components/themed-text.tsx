import React from 'react';
import { StyleSheet, Text, type TextProps } from 'react-native';

import { Fonts, FontSizes } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
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
    fontSize: FontSizes.title,
    fontFamily: Fonts.momo, // Deine MomoTrustDisplay-Regular Font
    
  },
  subtitle: {
    fontSize: FontSizes.xlarge,
    fontFamily: Fonts.momo, // Deine MomoTrustDisplay-Regular Font
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: FontSizes.normal,
    color: '#0a7ea4',
    fontFamily: Fonts.regular,
  },
});