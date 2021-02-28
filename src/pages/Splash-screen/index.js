import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets/illustration';

const Splash = () => {
  return (
    <View style={styles.pagwWrapper}>
      <ILLogo />
      <Text style={styles.textLogo}>My Doctor</Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  pagwWrapper: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    fontSize: 20,
    color: '#112340',
    marginTop: 20,
    fontFamily: 'Nunito-SemiBold',
  },
});
