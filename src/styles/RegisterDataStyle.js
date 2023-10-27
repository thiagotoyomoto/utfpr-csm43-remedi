import { StyleSheet} from 'react-native';
import {winWidth, colors}  from './GlobalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: 'center',
      },
    topView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: winWidth,
        backgroundColor: colors.primary,
        maxHeight: 150,
        marginBottom: 25
    },
    topHeader: {
        color: "#FFF",
        fontSize: 25
    },
    input: {
        width: winWidth * 0.8,
        marginVertical: 16,
        borderRadius: 5,
        backgroundColor: "#FFF",
    },
    buttonComplete: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 50,
        marginTop: 225,
        marginBottom: 8
    }

})

export {styles};