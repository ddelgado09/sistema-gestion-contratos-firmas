import React from "react";
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';

export default function LoginForm() {
	return (
		<View>
			<TextInput placeholder="Correo electrónico" style={styles.input} />
			<TextInput placeholder="Contraseña" style={styles.input} />
			<Button title="Iniciar Sesión" style={styles.btn} onPress={() => console.log('Enviar consola')} />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		width: 250,
		height: 50,
		backgroundColor: '#ccc',
		marginBottom: 25,
		borderRadius: 5
	},
	btn: {
		borderRadius: 8,
		fontWeight: '700'
	}
});