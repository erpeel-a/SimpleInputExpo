import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = ({ title, state, setState }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title} : </Text>
      <TextInput
        style={styles.input}
        placeholder={`Masukkan ${title}`}
        placeholderTextColor="#ccc"
        onChangeText={(state) => setState(state)}
        defaultValue={state}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#F4F4F5',
  },
  input: {
    marginLeft: 5,
    height: 30,
    borderBottomColor: '#D4D4D8',
    borderBottomWidth: 1,
    color: '#F4F4F5',
  },
});

export default Input;
