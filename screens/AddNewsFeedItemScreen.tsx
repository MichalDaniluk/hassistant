import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TextInput} from 'react-native';

import {DATA} from '../components/News/Data/Data';
import {ItemProps} from '../Types/ItemProps';
import UserAvatar from '../components/base/UserAvatar';

export function AddNewsFeedItemScreen() {
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

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{flex: 1}}>
          <Text style={styles.label}>Dodaj tytuł:</Text>
        </View>
        <View style={{flex: 3}}>
          <TextInput placeholder="Wpisz tytuł" autoFocus={true} />
        </View>
      </View>
      <View style={styles.rowBody}>
        <View style={{flex: 1}}>
          <UserAvatar />
        </View>
        <View style={{flex: 3}}>
          <TextInput
            multiline={true}
            numberOfLines={5}
            placeholder="Napisz coś..."
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 12,
          marginLeft: 12,
        }}>
        <View>
          <Image source={require('./addImage.png')} />
        </View>
        <View>
          <Text style={styles.link}>Dodaj zdjęcie</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#F3F2F2',
    marginLeft: 0,
    marginTop: 40,
  },
  title: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    height: 48,
    padding: 4,
    paddingLeft: 24,
  },
  rowBody: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    height: 150,
    padding: 4,
    paddingLeft: 24,
  },
  label: {
    color: '#28235F',
    fontWeight: '600',
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  link: {
    color: '#28235F',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 12,
  },
});

export default AddNewsFeedItemScreen;
