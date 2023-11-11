import React, { useState } from 'react';

import { Alert, ImageBackground, View } from 'react-native';
import {
	Button,
	Text,
	TextInput,
	Provider as PaperProvider,
} from 'react-native-paper';

import { styles, theme } from '../styles/LoginStyle.js';
import { useNavigation } from '@react-navigation/native';
import background from '../../assets/background.png'

import { auth } from '@/auth';

export function LoginScreen() {
	const navigation = useNavigation();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	async function onSignIn() {
		setIsLoading(true);

		const { error } = await auth.signIn({
			email: email,
			password: password
		});

		if(error) {
			Alert.alert(error.message);
		}

		setIsLoading(false);

		if(!error) {
			navigation.replace('Sidebar');
		}
	}

	return (
		<PaperProvider theme={theme}>
			<ImageBackground style={styles.container} source={background}>
				<Text
					style={{
						fontSize: 50,
						marginVertical: 30,
						color: "#FFF"
					}}
				>
					REMEDI
				</Text>
				<TextInput
					label="Email"
					autoCompleteType="email"
					onChangeText={setEmail}
					style={[styles.input, styles.emailInput]}
				/>
				<TextInput
					label="Senha"
					secureTextEntry={true}
					onChangeText={setPassword}
					style={[styles.input, styles.passwordInput]}
				/>
				<Button>
					<Text style={styles.textButtonForgot}>
						Esqueci minha senha
					</Text>
				</Button>
				<Button
					mode="conteined"
					buttonColor="#ED8A2F"
					style={styles.buttonLogin}
					onPress={onSignIn}
					disabled={isLoading}
				>
					<Text style={styles.textButtonLogin}>Login</Text>
				</Button>
				<Button onPress={() => {
					navigation.navigate('SignUp/User')
				}}>
					<Text style={{ color: '#FFF' }}>Não possui uma conta?</Text>
					<View />{' '}
					<Text
						style={{
							color: '#ED8A2F',
							textDecorationLine: 'underline',
						}}
					>
						Criar!
					</Text>
				</Button>
			</ImageBackground>
		</PaperProvider>
	);
}
