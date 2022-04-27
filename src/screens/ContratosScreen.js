import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ContratosScreen() {
  	return (
		<View>
			<Text style={styles.title}>Contratos</Text>
			<Text>ContratosScreen</Text>
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