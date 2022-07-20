import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  title: string;
};

export function CustomButton(props: Props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={[styles.buttonLabel]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#7B7B7B',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '25%',
    textAlign: 'center',
  },

  buttonLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#7B7B7B',
    textAlign: 'center',
  },
  selectedLabel: {
    backgroundColor: '#4FCBC2',
    color: '#fff',
  },
});
