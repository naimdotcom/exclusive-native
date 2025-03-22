import {ImageBackground, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {RegistrationStyles} from './style';
import {cf} from '../../styles/global';
const bgImage = require('../../assets/someImage.jpg');

export type signup = {
  name: string;
  email: string;
  password: string;
};

const Registration = () => {
  const [signupInfo, setSignupInfo] = useState<signup>({
    name: '',
    email: '',
    password: '',
  });

  const handlChangeText = (e: any, id: string) => {
    setSignupInfo({
      ...signupInfo,
      [id]: e,
    });
  };

  return (
    <>
      <View>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={{
            ...RegistrationStyles.image,
          }}>
          <View style={RegistrationStyles.overlay}></View>

          {/* content card */}
          <View style={RegistrationStyles.card}>
            <Text style={RegistrationStyles.title}>Create an Account</Text>

            <View>
              <Text style={RegistrationStyles.text}>Enter your Name</Text>
              <TextInput
                placeholder="Name"
                keyboardType="default"
                style={cf(RegistrationStyles.textInput)}
                placeholderTextColor={'#AAA'}
                id="name"
                onChangeText={e => handlChangeText(e, 'name')}
              />
            </View>
            <View>
              <Text style={RegistrationStyles.text}>
                Enter your email address
              </Text>
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                style={cf(RegistrationStyles.textInput)}
                placeholderTextColor={'#AAA'}
                onChangeText={e => handlChangeText(e, 'email')}
              />
            </View>
            <View>
              <Text style={RegistrationStyles.text}>Enter Password</Text>
              <TextInput
                placeholder="Password"
                keyboardType="default"
                style={cf(RegistrationStyles.textInput)}
                placeholderTextColor={'#AAA'}
                secureTextEntry={true}
                onChangeText={e => handlChangeText(e, 'password')}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Registration;
