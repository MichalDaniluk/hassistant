import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, SafeAreaView, Image, Text, StatusBar} from 'react-native';

import {data} from '@components/News/Data/Data';
import {ItemProps} from '@types/ItemProps';

import styles from './NewsFeedItemsStyle';

export function NewsFeedItemScreen({navigation, route}) {
  const [item, setItem] = useState<ItemProps>({
    id: '',
    title: '',
    description: '',
    avatar: '',
    author: '',
    added: '',
    heart: 0,
    images: [],
  });

  useEffect(() => {
    const itemFilter = data.filter(it => it.id === route.params.id);
    setItem(itemFilter[0]);
  }, [route.params.id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.title,
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
    });
  }, [navigation, item.title]);

  return (
    <SafeAreaView style={styles.item}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="default"
        showHideTransition="slide"
        hidden={false}
      />
      <View style={styles.header}>
        <View>
          <Image style={styles.avatar} source={{uri: item.avatar}} />
        </View>
        <View>
          <Text style={styles.author}>{item.author}</Text>
        </View>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <View>
        <Text>{item.description}</Text>
      </View>
      {item.images[0] && (
        <Image style={styles.image} source={{uri: item.images[0]}} />
      )}
    </SafeAreaView>
  );
}

export default NewsFeedItemScreen;
