import { StyleSheet } from 'react-native';
import { winHeight, winWidth, theme, colors } from './GlobalStyles';
import { color } from '@rneui/base';

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: '5%',
		alignItems: 'center',
	},
	medicationNameText: {
		marginTop: 12,
		marginBottom: 8,
		fontSize: 16,
		fontWeight: 'bold',
		color: colors.primary,
		borderColor: colors.primary,
	},
	medicationName: {
		backgroundColor: '#FFF',
	},
	frequencyText: {
		marginTop: 12,
		fontSize: 16,
		fontWeight: 'bold',
		color: colors.primary,
		marginBottom: 8,
	},
	frequency: {
		width: '100%',
		marginBottom: 18,
		backgroundColor: '#FFF',
		borderRadius: 100
	},
	configBox: {
		paddingHorizontal: 12,
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		width: '100%'
	},
	configText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: colors.primary,
		marginBottom: 8
	},
    alarmBox:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
	estoqueBox:{
		marginTop: 0,
		width: '100%'
	},
	estoqueInput:{
		backgroundColor: '#FFF',
	},
	obsBox: {
		marginTop: 12,
		width: '100%',
	},
	obsInput: {
		backgroundColor: '#FFF',
		paddingVertical: 16,
		height: 100
	},
	buttonSave: {
        alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		height: 50,
		width: '50%',
		alignSelf: 'center',
		marginBottom: 35
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    }
});

export { styles, theme };
