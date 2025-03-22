import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

// Define a generic style type that works with View, Text, and Image styles
type RNStyle = StyleProp<ViewStyle | TextStyle | ImageStyle>;

export const cf = (
  ...styles: (RNStyle | null | undefined)[]
): ViewStyle | TextStyle | ImageStyle => {
  // Remove undefined/null values
  const validStyles = styles.filter(Boolean) as RNStyle[];

  // Use reduce to iteratively apply StyleSheet.compose
  const composedStyle = validStyles.reduce<RNStyle>(
    (acc, style) => StyleSheet.compose(acc, style) as RNStyle,
    {} as RNStyle,
  );

  // Flatten the composed style
  return StyleSheet.flatten(composedStyle) as
    | ViewStyle
    | TextStyle
    | ImageStyle;
};

export const font = {
  Inter: 'Inter',
};

export const spacing = {
  s: 8,
  m: 16,
  l: 24,
  xl: 40,
};

export const color = {
  primary: '#222831',
  secondary: '#31363F',
  accent: '#76ABAE',
  light: '#EEEEEE',
};
