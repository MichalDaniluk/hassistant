import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import {DATA} from '../components/News/Data/Data';
import {ItemProps} from '../Types/ItemProps';

export function NewsFeedItemScreen(id) {
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
    //Alert.alert(id);
    const itemFilter = DATA[0];
    setItem(itemFilter);
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{uri: item.avatar}} />
      </View>
      <Text>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F2F2',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});

export default NewsFeedItemScreen;
