import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
const i = require('./src/assets/Asset4.webp');

const App = () => {
  const handleBtn = () => {
    Alert.alert('Button Clicked');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingLeft: 10,
        }}>
        <Text style={styles.text}>App</Text>
        <TouchableOpacity style={styles.btn} onPress={handleBtn}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Image source={i} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(34, 34, 34, 1)',
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    padding: 10,
  },
  btn: {
    backgroundColor: 'white',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
  },
});
