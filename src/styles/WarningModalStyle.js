import { StyleSheet} from 'react-native';
import {winHeight, winWidth}  from './GlobalStyles';

const styles = StyleSheet.create({
    modalBack: {
        position: 'absolute',
        height: winHeight,
        width: winWidth,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        flex: 1,
        padding: 25,
        width: winWidth * 0.9,
        maxHeight: 250,
        backgroundColor: "#EFEFEF",
        justifyContent: 'space-between',
        borderRadius: 5
    },
    textView: {
      backgroundColor: "#FFF",
      borderRadius: 5
    },
    text: {
      fontSize: 16,
      padding: 18
    },
    buttons: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    confirmButton: {
      borderRadius:  5,
      width: 135,
      marginTop: 30
    }
})

export {styles}