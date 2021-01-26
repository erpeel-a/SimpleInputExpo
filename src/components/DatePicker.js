import React from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ title, showDatepicker, show, date, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title} : </Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder={`Pilih ${title}`}
          placeholderTextColor="#ccc"
          defaultValue={date.toLocaleDateString()}
        />
        <View style={{ paddingHorizontal: 5 }}>
          <Button onPress={showDatepicker} title="Choose" color="#52525B" />
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginVertical: 10,
  },
  text: {
    color: '#F4F4F5',
  },
  input: {
    marginLeft: 5,
    marginBottom: 10,
    height: 30,
    borderBottomColor: '#D4D4D8',
    borderBottomWidth: 1,
    color: '#F4F4F5',
  },
});

export default DatePicker;
