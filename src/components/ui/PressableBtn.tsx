import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {cf, color} from '../../styles/global';

type props = {
  children: React.ReactNode;
  btnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
} & React.ComponentProps<typeof Pressable>;

const PressableBtn = ({
  children,
  btnStyle,
  textStyle,
  onPressIn,
  onPressOut,

  ...props
}: props) => {
  const [focused, setFocused] = useState(false);
  return (
    <Pressable
      onPressOut={e => {
        setFocused(false);
        if (onPressOut) onPressOut(e);
      }}
      onPressIn={e => {
        setFocused(true);
        if (onPressIn) onPressIn(e);
      }}
      style={({pressed}) =>
        cf(
          styles.base,
          pressed && styles.pressed,
          focused && styles.focus,
          btnStyle,
        )
      }
      {...props}>
      <Text style={cf(styles.text, textStyle)}>{children}</Text>
    </Pressable>
  );
};

export default PressableBtn;

const styles = StyleSheet.create({
  base: {
    backgroundColor: color.light,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: color.primary,
    fontFamily: 'Inter_18pt-Medium',
    fontSize: 14,
  },
  focus: {
    backgroundColor: color.light,
    borderWidth: 1,
  },
  pressed: {
    opacity: 0.7,
  },
});
