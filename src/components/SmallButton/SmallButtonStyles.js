import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    width: 70,
    borderRadius: 15,
    backgroundColor: Color.PRIMARY_RED_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  text: {
    fontSize: 9,
    textAlign : "center",
    lineHeight: 12,
  }
})

export default styles;