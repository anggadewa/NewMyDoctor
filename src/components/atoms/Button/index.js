import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({type, title}) => {
  return (
    <TouchableOpacity style={styles.container(type)}>
      <Text style={styles.textButton(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  textButton: (type) => ({
    fontSize: 18,
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : 'white',
    fontFamily: 'Nunito-SemiBold',
  }),
});
