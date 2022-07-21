import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  SafeAreaView,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {TopButtons} from '../components/News/TopButtons';
import Search from '../components/News/Search';
import UserAvatar from '../components/base/UserAvatar';

import {fetchResults} from '../components/News/Data/Data';
import Item from '../components/News/Item';

//import ItemProps from '../Types/ItemProps';

export function NewsFeedScreen({navigation, route}) {
  const dispatch = useDispatch();
  const listItems = useSelector(state => state.list.items);
  const totalItems = Array.isArray(listItems) ? listItems.length : 0;
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    initialiseList();
  }, []);

  const initialiseList = async () => {
    const curItems = await AsyncStorage.getItem('saved_list');

    if (curItems === null) {
      json = fetchResults(0);

      await AsyncStorage.setItem('saved_list', JSON.stringify(json));
    } else {
      json = JSON.parse(curItems);
    }

    dispatch({
      type: 'UPDATE_LIST_RESULTS',
      items: json,
    });
  };

  const persistResults = async newItems => {
    const curItems = await AsyncStorage.getItem('saved_list');
    let json = curItems === null ? {} : JSON.parse(curItems);

    for (let item of newItems) {
      json.push(item);
    }

    await AsyncStorage.setItem('saved_list', JSON.stringify(json));

    dispatch({
      type: 'UPDATE_LIST_RESULTS',
      items: json,
    });
  };

  const loadMoreResults = async info => {
    if (loadingMore || allLoaded) {
      return;
    }

    setLoadingMore(true);

    const newItems = fetchResults(totalItems);

    if (newItems.length === 0) {
      setAllLoaded(true);
    } else {
      await persistResults(newItems);
    }

    setLoadingMore(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Newsfeed',
      headerTitleAlign: 'center',
      headerBackTitleVisible: true,
      headerRight: () => <UserAvatar />,
    });
  }, [navigation]);

  const showItemScreen = (id: string) => {
    navigation.navigate('NewsFeedItem', {id});
  };

  const showAddItem = () => {
    navigation.navigate('AddNewsFeedItem', {listItems});
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
    <SafeAreaView style={styles.container}>
      <Search />
      <TopButtons />
      <Pressable onPress={() => showAddItem()}>
        <Text style={styles.link}>dodaj post ({totalItems})</Text>
      </Pressable>
      <FlatList
        scrollEventThrottle={250}
        onEndReached={info => {
          loadMoreResults(info);
        }}
        ListFooterComponent={
          <View style={styles.footer}>
            {loadingMore && (
              <Text style={styles.footerText}>Loading More...</Text>
            )}
          </View>
        }
        onEndReachedThreshold={0.01}
        data={listItems}
        renderItem={renderItem}
        keyExtractor={item => 'item_' + item.id}
      />
    </SafeAreaView>
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
  footer: {
    padding: 15,
  },
  footerText: {
    fontWeight: '600',
  },
});

export default NewsFeedScreen;
