import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ILGetStarted, ILLogo} from '../../assets/illustration';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.pageWrapper}>
      <View>
        <ILLogo />
        <Text style={styles.textTitle}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          locations={[0, 0.9]}
          colors={['#17B978', '#A7FF83']}
          style={styles.gradient}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Register')}
          />
        </LinearGradient>
        <Gap height={16} />
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          locations={[0, 0]}
          colors={['#ffffff', '#ffffff']}
          style={styles.gradient}>
          <Button
            title="Sign In"
            type="secondary"
            onPress={() => navigation.replace('Login')}
          />
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  pageWrapper: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.white,
  },
  textTitle: {
    fontSize: 28,
    color: colors.white,
    marginTop: 10,
    fontFamily: fonts.primary[600],
    maxWidth: 234,
    textAlign: 'right',
    marginLeft: 60,
  },
  gradient: {
    borderRadius: 10,
  },
});
