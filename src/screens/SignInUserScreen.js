import React from "react";

import { View } from "react-native";
import {
  Button,
  Text,
  TextInput,
  Provider as PaperProvider,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { styles, theme } from "../styles/LoginStyle.js";

export function RegisterUserScreen() {
  const navigation = useNavigation();

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <View>
          <Text>Cadastro</Text>
        </View>
        <View>
          <TextInput
            label="Email"
            autoCompleteType="email"
            style={[styles.input, styles.emailInput]}
          />
          <TextInput
            label="Senha"
            //onChangeText={password => setPassword(password)}
            secureTextEntry={true}
            style={[styles.input, styles.passwordInput]}
          />
          <TextInput
            label="Confirmar senha"
            //onChangeText={password => setPassword(password)}
            secureTextEntry={true}
            style={[styles.input, styles.passwordInput]}
          />
          <Button
            mode="conteined"
            buttonColor="#ED8A2F"
            style={styles.buttonLogin}
            onPress={() => {
              navigation.navigate('SignUp/Profile');
            }}
          >
            Continuar
          </Button>
          <Button onPress={() => {
            navigation.goBack();
          }}>
            <Text
              style={{
                color: "#ED8A2F",
                textDecorationLine: "underline",
              }}
            >
              Cancelar
            </Text>
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
}
