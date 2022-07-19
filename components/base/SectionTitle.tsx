import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  title: string;
};

export function SectionTitle(props: Props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    grid: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 12,
    align: 'center',
  },
  title: {
    color: '#28235F',
    font: 16,
    fontWeight: 'bold',
    align: 'center',
    width: '100%',
    border: '1px solid red',
  },
});
