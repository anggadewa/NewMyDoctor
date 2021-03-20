import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets/illustration';
import {colors, fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 2000);
  }, [navigation]);
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
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    fontSize: 20,
    color: colors.primary,
    marginTop: 10,
    fontFamily: fonts.primary[600],
  },
});
