import { StyleSheet } from 'react-native';
import { winHeight, winWidth, theme, colors } from './GlobalStyles';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		minHeight: '100%',
	},
	searchBox: {
		padding: 12,
		backgroundColor: colors.primary,
		marginBottom: 24,
	},
	searchbar: {
		margin: 24,
		marginRight: 'auto',
		marginLeft: 'auto',
		width: '80%',
		borderRadius: 5,
		backgroundColor: '#FFF',
	},
	medicationList: {
		alignItems: 'center',
		minHeight: '65%',
	},
	medication_item: {
		borderBottomWidth: 1,
		borderColor: colors.primary,
		borderRadius: 5,
		width: '90%',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingRight: 12,
		backgroundColor: '#FFF',
		marginVertical: 8,
	},
	medicationIcon: {},
	medicationIconCircle: {
		width: 48,
		height: 48,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		backgroundColor: colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
	},
	medicationName: {
		fontSize: 18,
		marginLeft: 8,
	},
	trashIcon: {},
	buttonNew: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		height: 50,
		width: '50%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	buttonNewText: {
		fontSize: 20,
		color: '#FFF',
	},
});

export { styles, theme };
