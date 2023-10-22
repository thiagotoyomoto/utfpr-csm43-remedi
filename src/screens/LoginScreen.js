import React from "react";

import {View } from 'react-native';
import {Button, Text, TextInput, Provider as PaperProvider} from 'react-native-paper';

import {styles, theme} from '../styles/LoginStyle.js';

export function Login() {
    return (
      <PaperProvider theme={theme}>
          <View style={styles.container}> 
              <Text 
              style={{
                fontSize: 50,
                marginVertical: 30
              }}>
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
                >
                  <Text style={styles.textButtonLogin}
                     
                  >
                    Login
                  </Text>
                </Button>
                <Button> 
                  <Text style={{color: "#FFF",}}>
                    Não possui uma conta? 
                  </Text>
                  <View/> {" "}
                  <Text style={{color: "#ED8A2F", 
                                textDecorationLine: 'underline',}}>
                    Criar!
                  </Text>
                </Button>
          </View>
      </PaperProvider>
   
  );
}
