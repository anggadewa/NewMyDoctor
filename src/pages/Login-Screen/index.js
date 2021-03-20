import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ILLogo} from '../../assets/illustration';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={40} />
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        locations={[0, 0.9]}
        colors={[colors.primary, colors.secondary]}
        style={styles.gradient}>
        <Button
          title="Sign In"
          // onPress={() => navigation.navigate('Register')}
        />
      </LinearGradient>
      <Gap height={30} />
      <Link
        title="Create New Account"
        size={16}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 10,
  },
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginVertical: 40,
    color: colors.dark1,
    maxWidth: 153,
  },
});
