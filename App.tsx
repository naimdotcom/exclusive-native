import {
  Alert,
  Button,
  FlatList,
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
  const data = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Jane',
    },
    {
      id: 3,
      name: 'Bob',
    },
  ];

  const handleBtn = () => {
    Alert.alert('Button Clicked');
    console.log('Button Clicked');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingLeft: 10,
          flex: 1,
          flexDirection: 'column',
          columnGap: 10,
        }}>
        <Text style={styles.text}>App</Text>
        <TouchableOpacity style={styles.btn} onPress={handleBtn}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
        <FlatList
          data={data}
          renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
          keyExtractor={item => String(item.id)}
        />
      </View>

      <View style={{flex: 1}}>
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
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: 'black',
  },
});
