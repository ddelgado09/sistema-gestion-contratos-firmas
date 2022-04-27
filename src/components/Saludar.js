import React from "react";
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Saludar({ nombre, apellido }) {
	console.log(nombre, apellido)
	return <Text>Hola {nombre} {apellido}</Text>;
}

Saludar.defaultProps = {
	nombre: 'Joselo',
	apellido: 'De Francisco'
}

Saludar.propTypes = {
	nombre: PropTypes.string.isRequired,
	apellido: PropTypes.string
} 