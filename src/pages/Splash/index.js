import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';
import {Fire} from '../../config';
// import { useEffect } from 'react/cjs/react.production.min';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      Fire.auth().onAuthStateChanged(user => {
        if (user) {
          // user sedang login
          console.log('user: ', user);
          navigation.replace('MainApp');
        } else {
          //user sudah logout
          navigation.replace('GetStarted');
        }
      });
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>E-Klinik Politala</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
