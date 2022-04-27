import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import NavigationDrawer from './src/navigation/NavigationDrawer';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';

export default function App() {
	return (
		<NavigationContainer>
			{/* <NavigationStack /> */}
			{/* <NavigationTab /> */}
			<NavigationDrawer />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
