import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Animation = () => {
  const [FadeAnime] = useState(new Animated.Value(0));

  const animate = () => {
    Animated.timing(FadeAnime, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(FadeAnime, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 1000);
  };

  return (
    <SafeAreaView>
      <View>
        <Animated.Text style={{opacity: FadeAnime, fontSize: 24}}>
          Animation
        </Animated.Text>

        <Button title="Animate" onPress={animate} />
      </View>
    </SafeAreaView>
  );
};

export default Animation;

const styles = StyleSheet.create({});
