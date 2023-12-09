import React, { useCallback, useState } from "react";

import { Alert, GestureResponderEvent, View } from "react-native";
import {
  Button,
  Text,
  TextInput,
  Provider as PaperProvider,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../styles/LoginStyle.js";
import { SignNavigatorParamsForNavigator } from "@/navigators/index.js";
import { supabase } from "@/lib/supabase";
import { useUserStore } from "@/stores";

export function SignUpUserScreen() {
  const navigation = useNavigation<SignNavigatorParamsForNavigator>();

  const { setUser } = useUserStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleContinue() {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if(error) {
      Alert.alert(error.message)
    } else {
      setUser({
        id: data.user.id,
        email: data.user.email
      });

      navigation.navigate('SignUp/Profile');
    }
  }

  function handleCancel() {
    navigation.goBack();
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View>
          <Text>Cadastro</Text>
        </View>
        <View>
          <TextInput
            label="Email"
            autoComplete="email"
            autoCapitalize="none"
            onChangeText={email => setEmail(email)}
            style={[styles.input, styles.emailInput]}
          />
          <TextInput
            label="Senha"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={password => setPassword(password)}
            style={[styles.input, styles.passwordInput]}
          />
          <TextInput
            label="Confirmar senha"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
            style={[styles.input, styles.passwordInput]}
          />
          <ContinueButton onPress={handleContinue} disabled={!(password !== '' && password === confirmPassword)} />
          <CancelButton onPress={handleCancel} />
        </View>
      </View>
    </PaperProvider>
  );
}

type ContinueButtonType = {
  onPress?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
}

function ContinueButton(props: ContinueButtonType) {
  return (
    <Button
      {...props}
      mode="contained"
      buttonColor="#ED8A2F"
      style={styles.buttonLogin}
    >
      Continuar
    </Button>
  );
}

type CancelButtonType = {
  onPress?: (e: GestureResponderEvent) => void;
}

function CancelButton(props: CancelButtonType) {
  return (
    <Button {...props}>
      <Text
        style={{
          color: "#ED8A2F",
          textDecorationLine: "underline",
        }}
      >
        Cancelar
      </Text>
    </Button>
  );
}