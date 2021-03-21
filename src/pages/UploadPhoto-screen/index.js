import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header titleHeader="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.prfoile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shiro Akagami</Text>
          <Text style={styles.profession}>Mobile Developer</Text>
        </View>
        <View>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            locations={[0, 0.9]}
            colors={['#17B978', '#A7FF83']}
            style={styles.gradient}>
            <Button
              title="Upload and Continue"
              // onPress={() => navigation.navigate('Register')}
            />
          </LinearGradient>
          <Gap height={30} />
          <Link title="Skip for this" align="center" />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 64,
  },
  prfoile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.grey2,
    borderRadius: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    borderRadius: 10,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.dark1,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    textAlign: 'center',
    color: colors.grey1,
  },
});
