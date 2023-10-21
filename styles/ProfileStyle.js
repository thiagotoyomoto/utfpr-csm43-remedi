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
    },
    bottomBox: {

    },
    profilePicture: {

    },
    profileName: {
        textAlign: 'center',
        backgroundColor:  'red',
    }
})

export {styles, theme}