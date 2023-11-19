import React, { useState } from 'react';

import { ImageBackground, View } from 'react-native';
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

  async function onSignIn() {
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
    } catch(err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
          mode="contained"
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
