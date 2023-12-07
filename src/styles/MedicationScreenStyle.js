import { StyleSheet } from 'react-native';
import { winHeight, winWidth, theme, colors } from './GlobalStyles';

const styles = StyleSheet.create({
    topBox: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    imgBg: {
        minHeight: '15%',
        padding: 18,
        backgroundColor: colors.primary,
        marginBottom: 24,
        justifyContent: 'center'
    },
    medicationName: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold'
    },
    topBoxRight: {
        flexDirection: 'row',
    },
    content:{
        padding: 20
    },
    section: {
        marginBottom: 16
    },
    sectionTittle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#054A91'
    },
    sectionContent: {
        paddingLeft: 20,
        fontSize: 16,
        marginTop: 8
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonBula: {
        alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		height: 50,
		width: '50%',
        position: 'absolute',
        bottom: 35
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    modal: {
		backgroundColor: '#FFF',
		padding: 24,
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	textModal: {
		textAlign: 'justify',
		fontSize: 16,
		marginVertical: 25,
	},
	confirmBtn: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 130,
		height: 50,
		borderRadius: 5,
		backgroundColor: colors.accent
	},
	confirmText: {
		color: '#FFF',
		fontSize: 16,
		fontWeight: 'bold'
	},
	cancelBtn: {
		width: 130,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cancelText: {
		color: colors.primary,
		fontSize: 16,
		fontWeight: 'bold'
	}

})

export {styles, theme}