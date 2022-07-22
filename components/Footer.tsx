import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.icon}>
        <Image source={require('../assets/icons/home.png')} />
      </View>
      <View style={styles.icon}>
        <Image source={require('../assets/icons/chat.png')} />
      </View>
      <View style={styles.icon}>
        <Image source={require('../assets/icons/people.png')} />
      </View>
      <View style={styles.icon}>
        <Image source={require('../assets/icons/money.png')} />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#4FCBC2',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 60,
    width: 24,
    height: 24,
    color: '#fff',
  },
});
