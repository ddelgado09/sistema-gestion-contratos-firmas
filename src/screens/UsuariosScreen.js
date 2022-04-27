import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function UsuariosScreen() {
  return (
	<View>
		<Text style={styles.title}>Usuarios</Text>
	 	<Text>UsuariosScreen</Text>
	</View>
  )
}

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		color: '#111',
		textAlign: 'center'
	}
});