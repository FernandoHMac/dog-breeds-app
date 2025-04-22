
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import DogItem from '../components/DogItem';

export default function BreedListScreen() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => {
        setDogs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Carregando raças...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dogs}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <DogItem dog={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
