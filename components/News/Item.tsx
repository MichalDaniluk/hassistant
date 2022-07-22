import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';

import {ItemProps} from '@types/ItemProps';

import styles from './ItemStyles';

const Item: FC<ItemProps> = ({
  id,
  title,
  avatar,
  author,
  heart,
  images,
  description,
  showItem,
}) => {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{uri: avatar}} />
        <Text style={styles.author}>{author}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Text style={styles.description}>
          {description.substring(0, 100)}...
        </Text>
        <Text style={styles.link} onPress={() => showItem(id)}>
          Więcej
        </Text>
      </View>
      {images[0] && <Image style={styles.image} source={{uri: images[0]}} />}
    </View>
  );
};

export default Item;
