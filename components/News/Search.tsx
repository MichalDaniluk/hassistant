import {View, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <View>
      <TextInput style={styles.search} onChangeText={setSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    margin: 12,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 40,
    padding: 10,
  },
});

export default Search;
