import React, { useState } from 'react';

import { GestureResponderEvent, ImageBackground, View } from 'react-native';
import {
  Button,
  Text,
  TextInput,
  Provider as PaperProvider,
} from 'react-native-paper';

import { styles } from '../styles/LoginStyle';
import { useNavigation } from '@react-navigation/native';

import { auth } from '@/auth';
import { useUserStore } from '@/stores/useUserStore';
import { useProfileStore } from '@/stores/useProfileStore';
import { SignNavigatorParamsForNavigator } from '@/navigators';

const backgroundImage = require('@assets/background.png');

export function LoginScreen() {
  const navigation = useNavigation<SignNavigatorParamsForNavigator>();

  const { setUser } = useUserStore();
  const { setProfile } = useProfileStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  async function handleSignIn() {
    setLoading(true);

    try {
      const user = await auth.signIn({
        email: email,
        password: password
      });

      const profile = await auth.getProfile();

      setUser(user);
      setProfile(profile);

      navigation.navigate('SidebarNavigator');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleCreateAccount() {
    navigation.navigate('SignUp/User')
  }

  return (
    <PaperProvider>
      <ImageBackground style={styles.container} source={backgroundImage}>
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
          autoComplete="email"
          autoCapitalize="none"
          onChangeText={setEmail}
          style={[styles.input, styles.emailInput]}
        />
        <TextInput
          label="Senha"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={setPassword}
          style={[styles.input, styles.passwordInput]}
        />
        <RecoverPasswordButton />
        <LoginButton onPress={handleSignIn} disabled={isLoading} />
        <CreateAccountButton onPress={handleCreateAccount} />
      </ImageBackground>
    </PaperProvider>
  );
}

type RecoverPasswordButton = {};

function RecoverPasswordButton(props: RecoverPasswordButton) {
  return (
    <Button>
      <Text style={styles.textButtonForgot}>
        Esqueci minha senha
      </Text>
    </Button>
  );
}

type LoginButtonProps = {
  onPress?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
}

function LoginButton(props: LoginButtonProps) {
  return (
    <Button
      {...props}
      mode="contained"
      buttonColor="#ED8A2F"
      style={styles.buttonLogin}
    >
      <Text style={styles.textButtonLogin}>Login</Text>
    </Button>
  );
}

type CreateAccountButtonProps = {
  onPress?: (e: GestureResponderEvent) => void
}

function CreateAccountButton(props: CreateAccountButtonProps) {
  return (
    <Button {...props}>
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
  );
}
