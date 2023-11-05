import React, { useState } from 'react';

import { Alert, View } from 'react-native';
import {
	Button,
	Text,
	TextInput,
	Provider as PaperProvider,
} from 'react-native-paper';

import { styles, theme } from '../styles/LoginStyle.js';
import { supabase } from '../lib/supabase.js';

export function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	async function onSignIn() {
		setIsLoading(true);

		const { error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password
		});

		if(error) {
			Alert.alert(error.message);
		}

		setIsLoading(false);
	}

	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
				<Text
					style={{
						fontSize: 50,
						marginVertical: 30,
					}}
				>
					REMEDI
				</Text>
				<TextInput
					label="Email"
					autoCompleteType="email"
					style={[styles.input, styles.emailInput]}
				/>
				<TextInput
					label="Senha"
					secureTextEntry={true}
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
				<Button>
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
			</View>
		</PaperProvider>
	);
}
