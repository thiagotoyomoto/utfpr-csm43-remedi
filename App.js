import { createContext, useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { Button, Provider as PaperProvider, Text } from 'react-native-paper';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

import {
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  RegisterUserScreen,
  RegisterProfileScreen,
  MedicationListScreen,
} from '@/screens';

import { useProfileStore, useUserStore } from '@/stores';
import { Icons } from '@/components';

import theme from '@/styles/LoginStyle';
import { useWeekDayStore } from '@/stores/weekDay';
import { auth } from '@/auth';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const { setWeekDay } = useWeekDayStore();

  const { user, setUser } = useUserStore();
  const { profile, setProfile } = useProfileStore();

  useEffect(() => {
    (async () => {
      setWeekDay();
  
      try {
        const user = await auth.getUser();
        console.debug(user)
        const profile = await auth.getProfile();
        console.debug(profile)
  
        setUser(user);
        setProfile(profile);
      } catch(err) {
        console.log("FOi aqui")
        console.error(err);
      }
    })()
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Regular': Montserrat_400Regular,
    'Montserrat-Bold': Montserrat_700Bold,
    'Gotham-Regular': require('./assets/fonts/Gotham-Book.otf'),
    'Gotham-Bold': require('./assets/fonts/Gotham-Bold.otf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ user ? 'Sidebar' : 'SignIn' } screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="SignIn" component={LoginScreen} />
          <Stack.Screen name="SignUp/User" component={RegisterUserScreen} />
          <Stack.Screen name="SignUp/Profile" component={RegisterProfileScreen} />
          <Stack.Screen name="Sidebar" component={Sidebar} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

function Sidebar() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerPosition: 'right'
    }}
      drawerContent={props => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <View style={{
            padding: 16
          }}>
            <Button onPress={() => {
              navigation.replace('SignIn')
            }}>
              <Text>Sair da conta</Text>
            </Button>
          </View>
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name='Navbar' component={Navbar} options={{ drawerItemStyle: { display: 'none' } }} />
    </Drawer.Navigator>
  );
}

function Navbar() {
  const navigation = useNavigation();

  const { profile } = useProfileStore();

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerStyle: {
        height: 96
      },
      headerRightContainerStyle: {
        marginRight: 12
      },
      headerTitleStyle: {
        fontSize: 24
      },
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 64
      },
      tabBarIcon: createTabBarIcon(route.name),
      headerRight: ({ tintColor, pressColor, pressOpacity }) => {
        return (
          <Pressable onPress={() => { navigation.toggleDrawer() }}>
            <Icons.Menu size={36} color={tintColor} />
          </Pressable>
        );
      }
    })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerTitle: `Bom dia, ${profile.name}!`
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        headerTitle: "Perfil"
      }} />
      <Tab.Screen name="Medications" component={MedicationListScreen} options={{
        headerTitle: "Medicações"
      }} />
      <Tab.Screen name="Stock" component={ProfileScreen} options={{
        headerTitle: "Estoque"
      }} />
    </Tab.Navigator>
  );
}

function createTabBarIcon(routeName) {
  return ({ focused, color }) => {
    const size = 36;

    if (routeName === 'Home') {
      return (
        <Icons.Home
          size={size}
          color={color}
          fill={focused}
        />
      );
    }
    else if (routeName === 'Profile') {
      return (
        <Icons.Person
          size={size}
          color={color}
          fill={focused}
        />
      );
    }
    else if (routeName === 'Medications') {
      return (
        <Icons.Prescription
          size={size}
          color={color}
          fill={focused}
        />
      );
    }
    else if (routeName === 'Stock') {
      return (
        <Icons.Package
          size={size}
          color={color}
          fill={focused}
        />
      );
    }
  };
}
