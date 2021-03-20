import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} titleHeader="Daftar Akun" />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Job" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          locations={[0, 0.9]}
          colors={[colors.primary, colors.secondary]}
          style={styles.gradient}>
          <Button
            title="Continue"
            // onPress={() => navigation.navigate('Register')}
          />
        </LinearGradient>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  gradient: {
    borderRadius: 10,
  },
  content: {
    paddingHorizontal: 40,
    paddingTop: 0,
  },
});
