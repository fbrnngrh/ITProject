import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo2} from '../../assets';
import {Input, Link, Button, Gap} from '../../components/atoms';
import {colors, fonts} from '../../utils';

export default function Login() {
  return (
    <View style={styles.page}>
      <ILLogo2 />
      <Text style={styles.title}>Masuk dan Mulai Berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={50} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 180,
  },
});
