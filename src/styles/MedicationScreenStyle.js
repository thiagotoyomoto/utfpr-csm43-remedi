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
    }

})

export {styles}