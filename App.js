import { Dimensions, View, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import { ProfileScreen } from './src/screens';
import { Header, NavBar } from './src/components';

import theme from './src/styles/LoginStyle';

const winHeight = Dimensions.get('window').height;

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Regular': Montserrat_400Regular,
    'Montserrat-Bold': Montserrat_700Bold,
    'Gotham-Regular': require('./assets/fonts/Gotham-Book.otf'),
    'Gotham-Bold': require('./assets/fonts/Gotham-Bold.otf')
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

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