import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    elevation: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    height: 30,
    marginHorizontal: 10
  }
})

export default styles