import { StyleSheet, Dimensions } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { winWidth, colors } from "./GlobalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "#000000",
  },
  input: {
    width: winWidth * 0.8,
    marginVertical: 16,
    borderRadius: 5,
    backgroundColor: "#FFF",
  },
  emailInput: {},
  passwordInput: {},
  buttonForgot: {},
  textButtonForgot: {
    color: "#FFF",
    textDecorationLine: "underline",
  },
  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 70,
    marginVertical: 45,
  },
  textButtonLogin: {
    width: winWidth * 0.4,
    fontSize: 22,
    color: "#FFF",
  },
});

export { styles };
