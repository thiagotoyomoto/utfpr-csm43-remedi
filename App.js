import { StyleSheet, Dimensions, View, SafeAreaView, Platform } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { ProfileScreen } from './src/screens';
import { Header, NavBar } from './src/components';

import theme from './src/styles/LoginStyle';

const winHeight = Dimensions.get('window').height;

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "#EAF2F6"
    }}>
      <PaperProvider theme={theme}>
        <View
          style={{
            flex: 1,

          }}>
          <Header
            tittle={"Perfil"}
            typeButton={"menu"}
          />
          <View style={{
            flex: 1,
            height: winHeight * 0.8,
          }}>
            <ProfileScreen />
          </View>
          <NavBar />
        </View>
      </PaperProvider>
    </SafeAreaView>
  );
}