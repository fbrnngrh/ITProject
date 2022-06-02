import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {ILHospitalBG, DummyHospitals1} from '../../assets';
import {colors, fonts} from '../../utils';
import {ListHospital} from '../../components';

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>1 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          name="H. Boejasin Pelaihari "
          address="JL. Pelaihari Tanah Laut"
          pic={DummyHospitals1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: 240,
    paddingTop: 30,
  },
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
});
