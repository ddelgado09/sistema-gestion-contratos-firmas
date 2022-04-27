import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/HomeScreen";
import UsuariosScreen from "../screens/UsuariosScreen";
import PlantillasContratosScreen from "../screens/PlantillasContratosScreen";
import ContratosScreen from "../screens/ContratosScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="Usuarios" component={UsuariosScreen} />
			<Drawer.Screen name="PlantillasContratos" component={PlantillasContratosScreen} />
			<Drawer.Screen name="Contratos" component={ContratosScreen} />
			<Drawer.Screen name="Settings" component={SettingsScreen} />
		</Drawer.Navigator>
	);
}