import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Color.GRAY_01,
    borderColor: Color.GRAY_02,
    borderWidth: 2,
    borderRadius: 30,
    position: "relative",
  },
  input: {
    paddingVertical: 13,
    paddingHorizontal: 20,
    fontSize: 16,
    lineHeight: 22,
  },
  icon: {
    position: "absolute",
    right: 13,
    top: 13,
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
