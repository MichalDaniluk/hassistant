import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, Alert} from 'react-native';

import {DATA} from '../components/News/Data/Data';
import {ItemProps} from '../Types/ItemProps';

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
    //Alert.alert('ID:' + route.params.id);
    const itemFilter = DATA.filter(it => it.id === route.params.id);
    setItem(itemFilter[0]);
  }, []);

  return (
    <View style={styles.item}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    backgroundColor: '#F3F2F2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingTop: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 24,
    fontFamily: 'Monteserrat',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: '#28235F',
    marginLeft: 2,
    paddingTop: 12,
  },
  author: {
    fontSize: 12,
    color: '#28235F',
    marginLeft: 12,
  },
  image: {
    borderRadius: 20,
    width: '100%',
    height: 250,
    marginTop: 12,
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  description: {
    fontSize: 12,
    color: '#7B7B7B',
  },
  link: {
    position: 'absolute',
    right: 4,
    bottom: 0,
    fontSize: 12,
    color: '#4FCBC2',
    fontWeight: '500',
    alignText: 'right',
  },
});

export default NewsFeedItemScreen;
