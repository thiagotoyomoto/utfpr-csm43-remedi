import React from "react";
import {View } from 'react-native';
import {Button, Text, TextInput, useTheme,  Provider as PaperProvider} from 'react-native-paper';
import {styles, theme} from '../styles/LoginStyle.js';

export default function Register() {

    return (
      <PaperProvider theme={theme}>
          <View style={styles.container}> 
              <View>
                <Text>
                  Cadastro
                </Text>
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
                >
                    Confirmar
                </Button>
                <Button> 
                  <Text style={{color: "#ED8A2F", 
                                textDecorationLine: 'underline',}}>
                    cancelar
                  </Text>
                </Button>
              </View>
            </View>
      </PaperProvider>
   
  );
}

