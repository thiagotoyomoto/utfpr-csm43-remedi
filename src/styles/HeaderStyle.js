import { StyleSheet } from "react-native";
import { winHeight, winWidth } from "./GlobalStyles";

const styles = StyleSheet.create({
  headerBlock: {
    width: winWidth,
    maxHeight: winHeight * 0.15,
    backgroundColor: "#FFF",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    paddingTop: 35,
  },
  tittle: {
    fontSize: 26,
  },
});

export { styles };
