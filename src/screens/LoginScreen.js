import { View, Text, StyleSheet, TextInput, Button, ToastAndroid } from 'react-native'
import React from 'react'
import { SessionContext } from '../navigation/NavigationDrawer';

export default function LoginScreen() {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const { session, setSession } = React.useContext(SessionContext);
	console.log(session);

	const login = () => {
		ToastAndroid.show('Inicio de sesión', ToastAndroid.LONG);
		setSession(true);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sistema de Gestión para Contratos y Firmas</Text>
			<TextInput placeholder='Correo Electrónico' value={email} onChangeText={setEmail} />
			<TextInput placeholder='Contraseña' value={password} onChangeText={setPassword} secureTextEntry />
			<Button title="Iniciar Sesión" onPress={login} />
		</View>
  	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
		marginTop: 0
	}
});