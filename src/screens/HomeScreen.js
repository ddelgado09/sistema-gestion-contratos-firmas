import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
	const goToPage = () => {
		navigation.navigate('Settings');
	};

  return (
	<View>
		<Text style={styles.title}>Plantillas Contratos</Text>
		<Text>Estamos en Home Screen</Text>
		<Text>Estamos en Home Screen</Text>
		<Text>Estamos en Home Screen</Text>
		<Text>Estamos en Home Screen</Text>
		<Text>Estamos en Home Screen</Text>
		<Text>Estamos en Home Screen</Text>
		<Text>Estamos en Home Screen</Text>
		<Text>Estamos en Home Screen</Text>
		<Text>Estamos en Home Screen</Text>
		<Text>Estamos en Home Screen</Text>
		<Text>Estamos en Home Screen</Text>
		<Text>Estamos en Home Screen</Text>
		<Button onPress={() => goToPage()} title="IR a Settings">Ir a Settings</Button>	
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