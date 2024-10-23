import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [inputText, setInputText] = useState('');

  const onChangeText = (text) => {
    setInputText(text);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.container__input} onChangeText={onChangeText} value={inputText} placeholder='Escribe algo aqui'/>

      <Text style={styles.container__text}>{inputText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container__input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    textAlign: 'center'
  },

  container__text: {
    fontSize: 20,
    color: 'blue',
    opacity: 0.2
  }
});
