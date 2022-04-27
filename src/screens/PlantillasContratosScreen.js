import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function PlantillasContratosScreen() {
  return (
	<View>
		<Text style={styles.title}>Plantillas Contratos</Text>
		<Text>PlantillasContratosScreen</Text>
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