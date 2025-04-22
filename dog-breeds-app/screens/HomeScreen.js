
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Dog App</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('BreedList')} color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
    borderRadius: 90,
  },
  title: {
    fontSize: 26,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#333',
  },
});
