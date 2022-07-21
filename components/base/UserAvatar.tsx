import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const UserAvatar = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://www.elle.pl/media/cache/default_view/uploads/media/default/0008/61/baby-face-u-mezczyzn-jak-wygladac-bardziej-mesko-i-dojrzale-dzieki-wlosom-i-zarostowi.jpeg',
        }}
        style={styles.avatar}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 12,
    marginBottom: 12,
  },
});
