import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomButton} from '../base/CustomButton';

export function TopButtons() {
  return (
    <View style={styles.container}>
      <CustomButton title="Tablica" />
      <CustomButton title="Wydarzenia" />
      <CustomButton title="Artkuły" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
