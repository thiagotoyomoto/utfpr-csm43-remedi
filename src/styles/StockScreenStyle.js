import { StyleSheet } from 'react-native';
import { winHeight, winWidth, theme, colors } from './GlobalStyles';
import { color } from '@rneui/base';

const styles = StyleSheet.create({
    medicationBox: {
        flexDirection: 'row',
        marginVertical: 8,
        paddingLeft: 16,
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    medicationName: {
        fontSize: 18,
        color: colors.primary
    },
    stockInput: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.accent,
        width: 60,
        height: 60,
        borderLeftWidth: 1,
        borderColor: colors.primary,
        backgroundColor: '#FFF',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    }

})

export {styles}