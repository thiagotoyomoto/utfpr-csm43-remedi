import { StyleSheet} from 'react-native';
import {colors,  winWidth}  from './GlobalStyles';

const styles = StyleSheet.create({
    topBox: {
        flex: 1,
        padding: 12,
        backgroundColor: colors.primary,
        maxHeight: 260,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    edit :{
        position: 'absolute',
        right: 30,
        top: 20
    },
    bottomBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pictureBox: {
        borderRadius: 100,
        borderStyle: 'solid',
        borderWidth: 8,
        borderColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 12,
    },
    profilePicture: {
        height: 165,
        width: 165,
        borderRadius: 100,
        
    },
    profileName: {
        fontSize: 32,
        color: "#FFF"
    },
    input: {
        width: winWidth * 0.9,
        marginVertical: 16,
        borderRadius: 5,
        backgroundColor: "#FFF",
    },
    inputHalfSize: {
        width: winWidth * 0.4,
        marginLeft: winWidth * 0.05,
        marginRight: winWidth * 0.05,
        
    },
    buttonPremium: {
        width: 200,
        borderRadius: 5, 
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 80
    }
})

export {styles}