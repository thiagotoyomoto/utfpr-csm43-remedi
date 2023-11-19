import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icons } from "@/components";
import { useProfileStore } from "@/stores";

import { createTabBarIcon } from "./utils/createTabBarIcon";
import { SidebarNavigatorParamsForNavigator } from "../SidebarNavigator";

import { EditProfileScreen, HomeScreen, MedicationListScreen, ProfileScreen } from "@/screens";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator<RootNavigatorParams>();

export type RootNavigatorParams = {
  'Home': undefined,
  'Profile': undefined,
  'Profile/Edit': undefined,
  'Medications': undefined,
  'Stock': undefined
}

export type RootNavigatorParamsForNavigator = NativeStackNavigationProp<RootNavigatorParams>;

export function RootNavigator() {
  const navigation = useNavigation<SidebarNavigatorParamsForNavigator>();

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
      <Tab.Screen name="Profile/Edit" component={EditProfileScreen} options={{
        tabBarItemStyle: {
          display: "none"
        },
        headerTitle: "Editar Perfil"
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
