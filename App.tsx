import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NewsFeedScreen} from './screens/NewsFeedScreen';
import {NewsFeedItemScreen} from './screens/NewsFeedItemScreen';
import {AddNewsFeedItemScreen} from './screens/AddNewsFeedItemScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  const globalScreenOptions = {
    headerStyle: {backgroundColor: '#F3F2F2'},
    headerTitleStyle: {color: '#28235F'},
    headerTintColor: '#fff',
    //headerTitleAlign: 'center',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Witaj w Health Nation'}}
        />
        <Stack.Screen
          name="NewsFeed"
          component={NewsFeedScreen}
          options={{title: 'Newsfeed'}}
        />
        <Stack.Screen
          name="NewsFeedItem"
          component={NewsFeedItemScreen}
          options={{title: 'Newsfeed Item'}}
        />
        <Stack.Screen
          name="AddNewsFeedItem"
          component={AddNewsFeedItemScreen}
          options={{title: 'Nowy post'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
