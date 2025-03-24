import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Registration from './src/components/Regisstration/Registration';
import Animation from './src/components/test/Animation';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Registration}
            options={{title: '', headerShown: false}}
          />
          <Stack.Screen name="Snimation" component={Animation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(34, 34, 34, 1)',
//     color: 'white',
//   },
//   text: {
//     color: 'white',
//     fontSize: 30,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//     padding: 10,
//   },
//   btn: {
//     backgroundColor: 'white',
//     color: 'white',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 10,
//     alignSelf: 'flex-start',
//   },
//   buttonText: {
//     color: 'black',
//   },
// });
