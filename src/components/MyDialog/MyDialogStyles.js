import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    height: 40,
    width: "70%"
  },
  buttonNo: {
    backgroundColor: Color.WHITE,
    borderWidth: 1,
    borderColor: Color.PRIMARY_RED_COLOR
  },
  buttonYes: {
    height: 40,
    backgroundColor: Color.PRIMARY_RED_COLOR
  }
})

export default styles