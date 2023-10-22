import { StyleSheet, Dimensions  } from 'react-native';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// Largura Tela
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

// Cores
const colors = {
    background: "#eaf2f6",
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
    navBlock: {
        width: winWidth,
        maxHeight: winHeight * 0.085,
        backgroundColor: "#FFF",
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 22,

    }
})

export {styles, theme}