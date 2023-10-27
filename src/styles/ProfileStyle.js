import { StyleSheet} from 'react-native';
import {colors}  from './GlobalStyles';

const styles = StyleSheet.create({
    topBox: {
        flex: 1,
        padding: 12,
        backgroundColor: colors.primary,
        minHeight: 260,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    edit :{
        position: 'absolute',
        right: 30,
        top: 20
    },
    bottomBox: {

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
    achievementsBox: {
        padding: 24
    },
    achievementsTittle: {
        fontSize: 20
    },
    badgeList: {
        width: 42,
        height: 42,
        backgroundColor: colors.primary,
    },
    buttonPremium: {
        width: 200,
        borderRadius: 5, 
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 40
    }
})

export {styles}