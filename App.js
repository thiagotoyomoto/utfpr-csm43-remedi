import { StyleSheet, Dimensions, View, SafeAreaView, Platform} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Login from './src/Login';
import Register from './src/Register';
import RegisterData from './src/RegisterData';
import NavBar from './src/NavBar';
import theme from './styles/LoginStyle';
import Header from './src/Header';
import WarningModal from './src/WarningModal';
import Profile from './src/profile';


const winHeight = Dimensions.get('window').height;
export default function App() {
  return (
    <SafeAreaView style={{flex: 1,
                          backgroundColor:  "#EAF2F6"}}>
    <PaperProvider theme={theme}>
        <View
        style={{
          flex:1,

        }}>
          <Header 
          tittle={"Perfil"}
          typeButton={"menu"}
          />
          <View style={{
            flex: 1,
            height: winHeight * 0.8,
          }}>
            <Profile/>
          </View>
          <NavBar/>
        </View>
    </PaperProvider>
    </SafeAreaView>
  );
}