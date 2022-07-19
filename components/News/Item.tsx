import React, {FC} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import {ItemProps} from '../../Types/ItemProps';

const Item: FC<ItemProps> = props => {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{uri: props.avatar}} />
        <Text style={styles.author}>{props.author}</Text>
      </View>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
      <Text style={styles.link}>Więcej</Text>
      <Image style={styles.image} source={{uri: props.images[0]}} />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
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
    flex: 1,
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
    fontSize: 12,
    color: '#4FCBC2',
    fontWeight: '500',
  },
});
