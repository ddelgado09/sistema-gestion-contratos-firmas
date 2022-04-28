import React, { createContext } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import UsuariosScreen from "../screens/UsuariosScreen";
import PlantillasContratosScreen from "../screens/PlantillasContratosScreen";
import ContratosScreen from "../screens/ContratosScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const SessionContext = createContext({
	session: false,
	setSession: () => {}
});

export default function NavigationDrawer() {
	const [session, setSession] = React.useState(false);
	const value = { session, setSession };

	return (
		<SessionContext.Provider value={value}>
		{session ? (
			<Drawer.Navigator>
				<Drawer.Screen name="Home" component={HomeScreen} />
				<Drawer.Screen name="Usuarios" component={UsuariosScreen} />
				<Drawer.Screen name="PlantillasContratos" component={PlantillasContratosScreen} />
				<Drawer.Screen name="Contratos" component={ContratosScreen} />
				<Drawer.Screen name="Settings" component={SettingsScreen} />
			</Drawer.Navigator>
			) : (
			<Stack.Navigator>
				<Stack.Screen name="Login" component={LoginScreen} />
			</Stack.Navigator>
			)}
		</SessionContext.Provider>
	);
}

export { SessionContext }