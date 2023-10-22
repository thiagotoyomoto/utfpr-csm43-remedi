import { StyleSheet, Dimensions  } from 'react-native';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// Largura Tela
const winWidth = Dimensions.get('window').width;

// Cores
const colors = {
    background: "#EAF2F6",
    primary: "#307FAB",
    accent: "#ED8A2F"
}

// Tema
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
  },
};

const styles = StyleSheet.create({
    topBox: {
        flex: 1,
        padding: 12,
        backgroundColor: colors.primary,
        maxHeight: 300,
        alignItems: 'center',
        justifyContent: 'space-around'
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
        height: 185,
        width: 185,
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
    buttonPremium: {
        width: 200,
        borderRadius: 5, 
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

export {styles, theme}