import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Teste from './src/Teste/index.js';



export default function App() {
  return (
    <View style={styles.container}>
      <Teste />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
