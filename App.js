import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

import Input from './src/components/Input';
import DatePicker from './src/components/DatePicker';

export default function App() {
  const [nama, setNama] = useState('');
  const [nis, setNis] = useState('');
  const [tempat, setTempat] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const clear = () => {
    setNama('');
    setNis('');
    setTempat('');
    setDate(new Date());
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const showAlert = () => {
    Alert.alert(
      'Informasi',
      `
        Nama   : ${nama}\n
        NIS        : ${nis}\n
        Tempat Lahir  : ${tempat}\n
        Tanggal Lahir : ${date.toLocaleDateString()}
      `
    );
    clear();
  };

  return (
    <View style={styles.container}>
      <Input title="Nama" state={nama} setState={setNama} />
      <Input title="NIS" state={nis} setState={setNis} />
      <Input title="Tempat Lahir" state={tempat} setState={setTempat} />
      <DatePicker
        title="Tanggal Lahir"
        showDatepicker={showDatepicker}
        show={show}
        date={date}
        onChange={onChange}
      />
      <View style={{ marginTop: 20, width: 300 }}>
        <Button title="Simpan" onPress={showAlert} />
      </View>

      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#27272A',
  },
});
