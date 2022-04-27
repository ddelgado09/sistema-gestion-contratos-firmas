import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen';
import UsuariosScreen from '../screens/UsuariosScreen';
import PlantillasContratosScreen from '../screens/PlantillasContratosScreen';
import ContratosScreen from '../screens/ContratosScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
	const screenOptions = ({ route }) => ({
		tabBarIcon: ({ focused, color, size }) => {
			let iconName;

			if (route.name === 'Home') {
				iconName = focused
				? 'ios-information-circle'
				: 'ios-information-circle-outline';
			} else if (route.name === 'Settings') {
				iconName = focused ? 'ios-list-circle-outline' : 'ios-list';
			}

			return <Ionicons name={iconName} size={size} color={color} />
		},
		tabBarActiveTintColor: 'tomato',
		tabBarInactiveTintColor: 'gray'
	})

	const options = () => {}

	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen options={options} name='Home' component={HomeScreen} />
			<Tab.Screen name='Usuarios' component={UsuariosScreen} />
			<Tab.Screen name='PlantillasContratos' component={PlantillasContratosScreen} />
			<Tab.Screen name='Contratos' component={ContratosScreen} />
			<Tab.Screen name='Settings' component={SettingsScreen} />
		</Tab.Navigator>
	);
}