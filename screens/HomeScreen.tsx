import {View, Button, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';

import styles from './HomeStyles';

const HomeScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions(
      {
        title: 'Witaj w aplikacji Health Nation',
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      },
      [navigation],
    );
  });

  return (
    <View style={styles.container}>
      <Image source={require('@assets/images/logo.png')} style={styles.logo} />
      <Button
        title="NewsFeed"
        onPress={() => navigation.navigate('NewsFeed')}
      />
    </View>
  );
};

export default HomeScreen;
