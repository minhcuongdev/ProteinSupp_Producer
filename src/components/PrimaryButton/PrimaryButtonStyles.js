import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    backgroundColor: Color.PRIMARY_RED_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  text: {
    color: Color.WHITE,
    fontSize: 18,
    lineHeight: 27,
    textAlign: "center",
    fontWeight: "600"
  }
})

export default styles