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

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
