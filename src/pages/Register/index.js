import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors, getData, storeData, useForm} from '../../utils';
// import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {Fire} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';

export default function Register({navigation}) {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(Success => {
        setLoading(false);
        setForm('reset');
        // https://firebase.com/users
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: Success.user.uid,
        };
        Fire.database()
          .ref('users/' + Success.user.uid + '/')
          .set(data);
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
        console.log('Register Success : ', Success);
      })
      .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
        console.log('Register error : ', error);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full name"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
          </ScrollView>
        </View>
        {loading && <Loading />}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
