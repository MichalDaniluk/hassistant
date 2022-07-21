import React, {useLayoutEffect} from 'react';
import {FlatList, View, StyleSheet, Image, Text} from 'react-native';

import {TopButtons} from '../components/News/TopButtons';
import Search from '../components/News/Search';

import {DATA} from '../components/News/Data/Data';
import Item from '../components/News/Item';

import ItemProps from '../Types/ItemProps';

export function NewsFeedScreen({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Item',
      headeLeft: () => (
        <View>
          <Image
            source={{
              uri: 'https://www.elle.pl/media/cache/default_view/uploads/media/default/0008/61/baby-face-u-mezczyzn-jak-wygladac-bardziej-mesko-i-dojrzale-dzieki-wlosom-i-zarostowi.jpeg',
            }}
            style={styles.userAvatar}
          />
        </View>
      ),
    });
  });

  const showItemScreen = id => {
    navigation.navigate('NewsFeedItem', {id});
  };

  const showAddItem = () => {
    navigation.navigate('AddNewsFeedItem');
  };

  const renderItem = ({item}) => (
    <Item
      id={item.id}
      title={item.title}
      description={item.description}
      avatar={item.avatar}
      author={item.author}
      images={item.images}
      added={item.added}
      heart={item.heart}
      showItem={showItemScreen}
    />
  );

  return (
    <View style={styles.container}>
      <Search />
      <TopButtons />
      <Text style={styles.link} onPress={() => showAddItem()}>
        dodaj post
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F2F2',
  },
  userAvatar: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  link: {
    fontSize: 12,
    color: '#4FCBC2',
    fontWeight: '500',
    alignText: 'right',
    marginLeft: 12,
    marginTop: 12,
    marginBottom: 12,
  },
});

export default NewsFeedScreen;
