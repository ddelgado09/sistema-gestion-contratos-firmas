import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import UsuariosScreen from '../screens/UsuariosScreen';
import PlantillasContratosScreen from '../screens/PlantillasContratosScreen';
import ContratosScreen from '../screens/ContratosScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
	  <Stack.Navigator>
		  <Stack.Screen name='Home' component={HomeScreen} />
		  <Stack.Screen name='Usuarios' component={UsuariosScreen} />
		  <Stack.Screen name='PlantillasContratos' component={PlantillasContratosScreen} />
		  <Stack.Screen name='Contratos' component={ContratosScreen} />
		  <Stack.Screen name='Settings' component={SettingsScreen} />
	  </Stack.Navigator>
  );
}