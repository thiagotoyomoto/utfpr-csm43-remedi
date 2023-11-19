import { StyleSheet} from 'react-native';
import {colors}  from './GlobalStyles';

const styles = StyleSheet.create({
    topBox: {
        padding: 12,
        backgroundColor: colors.primary,
        minHeight: 260,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    edit :{
        position: 'absolute',
        right: 16,
        top: 16
    },
    bottomBox: {
        flex: 1
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
    achievementsTitle: {
        marginHorizontal: 24,
        marginVertical: 16,
        fontSize: 20
    },
    achievementsList: {
        marginHorizontal: 24
    },
    buttonPremium: {
        width: 200,
        height: 50,
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export {styles}