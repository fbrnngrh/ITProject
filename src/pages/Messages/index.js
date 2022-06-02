import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {List} from '../../components/';
import {colors, fonts} from '../../utils';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';

export default function Messages({navigation}) {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Alexander Jennie',
      desc: 'Baik Bu, Terimakasih Banyak atas waktunya',
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Nairobi Putri',
      desc: 'Oh tentu saja bu',
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 'Jhonny Parker',
      desc: 'Terimakasih Banyak atas waktunya',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <List
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
