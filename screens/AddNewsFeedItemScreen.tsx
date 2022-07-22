import React, {useState, useLayoutEffect} from 'react';
import {View, Image, Text, TextInput, Pressable} from 'react-native';

import {ItemProps} from '@types/ItemProps';
import UserAvatar from '@components/base/UserAvatar';
import {useDispatch, useSelector} from 'react-redux';

import styles from './AddNewsFeedStyles';

export function AddNewsFeedItemScreen({navigation}) {
  const dispatch = useDispatch();
  const listItems = useSelector(state => state.list.items);
  const [item, setItem] = useState<ItemProps>({
    id: listItems.length + 1,
    title: '',
    description: '',
    avatar: 'baby.jpeg',
    author: 'Antoni Kowalski',
    added: '',
    heart: 0,
    images: [],
  });

  const addNewsFeedItem = () => {
    dispatch({
      type: 'ADD_TO_LIST',
      items: [...listItems, item],
    });
    navigation.navigate('NewsFeed');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Nowy post',
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerRight: () => (
        <View>
          <Pressable onPress={addNewsFeedItem}>
            <Text style={styles.link}>dodaj</Text>
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);

  const setTitle = title => {
    setItem({...item, title});
  };

  const setDescription = desc => {
    setItem({...item, description: desc});
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{flex: 1}}>
          <Text style={styles.label}>Dodaj tytuł:</Text>
        </View>
        <View style={{flex: 3}}>
          <TextInput
            placeholder="Wpisz tytuł"
            autoFocus={true}
            onChangeText={title => setTitle(title)}
            value={item.title}
          />
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
            onChangeText={desc => setDescription(desc)}
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
          <Image source={require('@assets/images/addImage.png')} />
        </View>
        <View>
          <Text style={styles.link}>Dodaj zdjęcie</Text>
        </View>
      </View>
    </View>
  );
}

export default AddNewsFeedItemScreen;
