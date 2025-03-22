import {ImageBackground, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {RegistrationStyles} from './style';
import {cf} from '../../styles/global';
const bgImage = require('../../assets/someImage.jpg');
const Registration = () => {
  return (
    <>
      <SafeAreaView>
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
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Registration;
