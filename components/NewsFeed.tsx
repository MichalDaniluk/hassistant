import React from 'react';
import {FlatList, View} from 'react-native';

import {SectionTitle} from './base/SectionTitle';
import {TopButtons} from './News/TopButtons';

import {DATA} from './News/Data/Data';
import Item from './News/Item';

export function NewsFeed() {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      description={item.description}
      avatar={item.avatar}
      author={item.author}
      images={item.images}
    />
  );

  return (
    <View>
      <SectionTitle title="Newsfeed" />
      <TopButtons />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default NewsFeed;
