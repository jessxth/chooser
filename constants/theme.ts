/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    background: '#F8F9FA',   // sehr helles Grau als Grundfläche
    surface: '#FFFFFF',      // Karten, Container
    text: '#1C1C1C',         // Standard-Text
    primary: '#4D96FF',      // Blau – Buttons, Akzente
    secondary: '#FF6B6B',    // Rot – Interaktion, Glücksrad-Segment
    accent: '#FFD93D',       // Gelb – Highlight, Energie
    border: '#E0E0E0',       // Trennlinien
    muted: '#6C757D',        // inaktive Texte
  },
  dark: {
    background: '#121212',   // tiefes Grau, fast schwarz
    surface: '#1E1E1E',      // Karten, Container
    text: '#FFFFFF',         // Standard-Text
    primary: '#4D96FF',      // Blau bleibt gleich für Wiedererkennung
    secondary: '#FF6B6B',    // Rot für Kontrast
    accent: '#FFD93D',       // leuchtendes Gelb
    border: '#2A2A2A',       // dezente Linien
    muted: '#9CA3AF',        // abgeschwächte Texte
  },
};

// Einfache Font-Konfiguration
export const Fonts = {
  // System Fonts als Standard
  regular: Platform.select({
    ios: 'system-ui',
    android: 'normal',
    default: 'normal',
    web: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  }),
  
  bold: Platform.select({
    ios: 'system-ui',
    android: 'normal', 
    default: 'normal',
    web: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  }),
  
  medium: Platform.select({
    ios: 'system-ui',
    android: 'normal',
    default: 'normal',
    web: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  }),
  
  black: Platform.select({
    ios: 'system-ui',
    android: 'normal',
    default: 'normal',
    web: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  }),
  
  // Nur deine Momo Font als Custom Font
  momo: 'MomoTrustDisplay-Regular',
  
  // Monospace für Code
  mono: Platform.select({
    ios: 'ui-monospace',
    android: 'monospace',
    default: 'monospace',
    web: "SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  }),
};

// Einfache Font-Größen
export const FontSizes = {
  small: 14,
  normal: 16,
  large: 20,
  xlarge: 24,
  title: 70,
};