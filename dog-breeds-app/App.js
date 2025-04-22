
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BreedListScreen from './screens/BreedListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bem-vindo' }} />
        <Stack.Screen name="BreedList" component={BreedListScreen} options={{ title: 'Raças de Cães' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
