import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Dimensions,
} from 'react-native';

// Define a generic style type that works with View, Text, and Image styles
type RNStyle = StyleProp<ViewStyle | TextStyle | ImageStyle>;

/**
 * Composes multiple styles together. This is a convenience wrapper around
 * `StyleSheet.compose` and `StyleSheet.flatten`. It removes any undefined/null
 * values from the input styles array, iteratively applies `StyleSheet.compose`
 * to the remaining styles, and then flattens the result with
 * `StyleSheet.flatten`.
 *
 * @param styles One or more styles to compose. Any undefined/null values will
 * be ignored.
 *
 * @returns The composed style.
 */
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

const {width, height} = Dimensions.get('window');

export const font = {
  Inter: 'Inter-font',
  InterThin: 'Inter_18pt-Thin',
  InterLight: 'Inter_18pt-Light',
  InterRegular: 'Inter_18pt-Regular',
  InterMedium: 'Inter_18pt-Medium',
  InterBold: 'Inter_18pt-Bold',
  FiraCodeBold: 'FiraCode-Bold',
  FiraCodeLight: 'FiraCode-Light',
  FiraCodeRegular: 'FiraCode-Regular',
  FiraCodeMedium: 'FiraCode-Medium',
};

export const color = {
  primary: '#222831',
  secondary: '#31363F',
  accent: '#76ABAE',
  light: '#EEEEEE',
};

export const spacing = {
  '0': 0,
  px: width * 0.0025,
  '0.5': width * 0.005,
  '1': width * 0.01,
  '1.5': width * 0.015,
  '2': width * 0.02,
  '2.5': width * 0.025,
  '3': width * 0.03,
  '3.5': width * 0.035,
  '4': width * 0.04,
  '5': width * 0.05,
  '6': width * 0.06,
  '7': width * 0.07,
  '8': width * 0.08,
  '9': width * 0.09,
  '10': width * 0.1,
  '11': width * 0.11,
  '12': width * 0.12,
  '14': width * 0.14,
  '16': width * 0.16,
  '20': width * 0.2,
  '24': width * 0.24,
  '28': width * 0.28,
  '32': width * 0.32,
  '36': width * 0.36,
  '40': width * 0.4,
  '44': width * 0.44,
  '48': width * 0.48,
  '52': width * 0.52,
  '56': width * 0.56,
  '60': width * 0.6,
  '64': width * 0.64,
  '72': width * 0.72,
  '80': width * 0.8,
  '96': width * 0.96,
};

export const size = {
  xs: height * 0.015,
  sm: height * 0.0175,
  base: height * 0.02,
  lg: height * 0.0225,
  xl: height * 0.025,
  '2xl': height * 0.03,
  '3xl': height * 0.0375,
  '4xl': height * 0.045,
  '5xl': height * 0.06,
  '6xl': height * 0.075,
  '7xl': height * 0.09,
  '8xl': height * 0.12,
  '9xl': height * 0.16,
};
