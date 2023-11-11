import { Button, Provider as PaperProvider } from 'react-native-paper';
import {
	useFonts,
	Montserrat_400Regular,
	Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
	HomeScreen,
	LoginScreen,
	ProfileScreen,
	RegisterUserScreen,
	RegisterProfileScreen,
	MedicationListScreen,
} from './src/screens';

import { Icons } from './src/components';

import theme from './src/styles/LoginStyle';
import { useUserStore } from './src/stores';
import { supabase } from './src/lib/supabase';
import { useEffect, useState } from 'react';
import { Pressable } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
	const user = useUserStore((state) => state.user);
	const setUser = useUserStore((state) => state.setUser);

	useEffect(() => {
		supabase.auth
			.getSession()
			.then(({ data, error }) => {
				const session = data.session;
				const user = session?.user;
				if (user) {
					setUser(user);
				}
			})
			.catch((error) => {
				console.error(error);
			});
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
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen
						name="SignIn"
						component={LoginScreen}
					/>
					<Stack.Screen
						name="SignUp/User"
						component={RegisterUserScreen}
					/>
					<Stack.Screen
						name="SignUp/Profile"
						component={RegisterProfileScreen}
					/>
					<Stack.Screen
						name="HomeTabs"
						component={HomeTabs}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}

function HomeTabs() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerStyle: {
					height: 96,
				},
				headerRightContainerStyle: {
					marginRight: 12,
				},
				headerTitleStyle: {
					fontSize: 24,
				},
				tabBarShowLabel: false,
				tabBarStyle: {
					height: 64,
				},
				tabBarIcon: createTabBarIcon(route.name),
				headerRight: ({ tintColor, pressColor, pressOpacity }) => {
					return (
						<Pressable
							onPress={async () => {
								await supabase.auth.signOut();
							}}
						>
							<Icons.Menu
								size={36}
								color={tintColor}
							/>
						</Pressable>
					);
				},
			})}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerTitle: 'Bom dia, Clara!',
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					headerTitle: 'Perfil',
				}}
			/>
			<Tab.Screen
				name="Medications"
				component={MedicationListScreen}
				options={{
					headerTitle: 'Medicações',
				}}
			/>
			<Tab.Screen
				name="Stock"
				component={ProfileScreen}
				options={{
					headerTitle: 'Estoque',
				}}
			/>
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
		if (routeName === 'Profile') {
			return (
				<Icons.Person
					size={size}
					color={color}
					fill={focused}
				/>
			);
		}
		if (routeName === 'Medications') {
			return (
				<Icons.Prescription
					size={size}
					color={color}
					fill={focused}
				/>
			);
		}
		if (routeName === 'Stock') {
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
