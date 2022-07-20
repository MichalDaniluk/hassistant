import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {CustomButton} from '../base/CustomButton';

export function TopButtons() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomButton title="Tablica" />
        <CustomButton title="Wydarzenia" />
        <CustomButton title="Artkuły" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    padding: 12,
  },
});
