import { Dimensions } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

// Largura Tela
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

// Cores
const colors = {
	background: '#EAF2F6',
	primary: '#3454a4',
	accent: '#ED8A2F',
};

// Tema
const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: colors.primary,
		accent: colors.accent,
		background: '#FF0000',
	},
};

export { winHeight, winWidth, colors, theme };
