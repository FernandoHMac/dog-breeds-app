
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DogItem({ dog }) {
  return (
    <View style={styles.card}>
      {dog.image?.url && (
        <Image source={{ uri: dog.image.url }} style={styles.image} />
      )}
      <Text style={styles.name}>{dog.name}</Text>
      <Text style={styles.label}>Temperamento:</Text>
      <Text style={styles.text}>{dog.temperament || 'Desconhecido'}</Text>
      <Text style={styles.label}>Expectativa de Vida:</Text>
      <Text style={styles.text}>{dog.life_span}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  label: {
    marginTop: 10,
    fontWeight: '600',
  },
  text: {
    fontSize: 14,
    color: '#444',
  },
});
