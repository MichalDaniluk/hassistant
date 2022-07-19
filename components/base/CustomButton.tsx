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
  container: {
    flex: 1,
    marginTop: 2,
  },
  button: {
    borderRadius: 4,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    width: 24,
    height: 24,
    textAlign: 'center',
    color: '#333',
    border: '1px solid #000',
  },

  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});
