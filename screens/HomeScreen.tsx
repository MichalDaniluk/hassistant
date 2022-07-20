import {View, Button, StyleSheet, Image} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('./logo.png')} style={styles.logo} />
      <Button
        title="NewsFeed"
        onPress={() => navigation.navigate('NewsFeed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28235F',
    width: '100%',
  },
  logo: {
    width: 145,
    height: 110,
    marginBottom: 24,
  },
});

export default HomeScreen;
