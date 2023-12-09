import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, RegisterProfileScreen, SignUpUserScreen } from "@/screens";

import { SidebarNavigator } from "../SidebarNavigator";

const Stack = createNativeStackNavigator<SignNavigatorParams>();

export type SignNavigatorProps = {
    isLogged: boolean;
}

export type SignNavigatorParams = {
  'SignIn': undefined;
  'SignUp/User': undefined;
  'SignUp/Profile': undefined;
  'SidebarNavigator': undefined;
}

export type SignNavigatorParamsForNavigator = NativeStackNavigationProp<SignNavigatorParams>;

export function SignNavigator(props: SignNavigatorProps) {
    return (
        <Stack.Navigator initialRouteName={ props.isLogged ? 'SidebarNavigator' : 'SignIn' } screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="SignIn" component={LoginScreen} />
            <Stack.Screen name="SignUp/User" component={SignUpUserScreen} />
            <Stack.Screen name="SignUp/Profile" component={RegisterProfileScreen} />
            <Stack.Screen name="SidebarNavigator" component={SidebarNavigator} />
          </Stack.Navigator>
    );
}
