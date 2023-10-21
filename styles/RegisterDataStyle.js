import { StyleSheet, Dimensions  } from 'react-native';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// Largura Tela
const winWidth = Dimensions.get('window').width;

// Cores
const colors = {
    background: "#E8E8E8",
    primary: "#307FAB",
    accent: "#ED8A2F"
}

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      accent: colors.accent,
    },
  };

  
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

export {theme, styles};