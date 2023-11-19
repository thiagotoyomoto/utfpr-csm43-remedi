import { View } from "react-native";
import { Button, Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItemList, DrawerNavigationProp, createDrawerNavigator } from "@react-navigation/drawer";

import { auth } from "@/auth";

import { RootNavigator } from "../RootNavigator";
import { SignNavigatorParamsForNavigator } from "../SignNavigator";

const Drawer = createDrawerNavigator<SidebarNavigatorParams>();

export type SidebarNavigatorParams = {
  'RootNavigator': undefined;
}

export type SidebarNavigatorParamsForNavigator = DrawerNavigationProp<SidebarNavigatorParams>;

export function SidebarNavigator() {
    const navigation = useNavigation<SignNavigatorParamsForNavigator>();
  
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
              <Button onPress={async () => {
                await auth.signOut();
  
                navigation.replace('SignIn')
              }}>
                <Text>Sair da conta</Text>
              </Button>
            </View>
          </DrawerContentScrollView>
        )}
      >
        <Drawer.Screen name='RootNavigator' component={RootNavigator} options={{ drawerItemStyle: { display: 'none' } }} />
      </Drawer.Navigator>
    );
  }