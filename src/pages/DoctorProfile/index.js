import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

export default function DoctorProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile name="Nairobi Putri Hayza" desc="Dokter Anak" />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value="Universitas Gajah mada" />
      <ProfileItem label="Tempat Praktik" value="Klinik Kesehatan" />
      <ProfileItem label="No. STR" value="00000120103031" />
      <View style={styles.action}>
        <Button title="Start Consultation" onPress={() => navigation.navigate('Chatting')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
