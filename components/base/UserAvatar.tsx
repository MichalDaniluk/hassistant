import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const UserAvatar = () => {
  return (
    <View>
      <Image source={require('./baby.jpeg')} style={styles.avatar} />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    flex: 1,
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 12,
    marginBottom: 12,
  },
});
