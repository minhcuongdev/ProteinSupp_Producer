import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Color.WHITE,
    borderRadius: 20,
    elevation: 10,
    padding: 20,
    // alignItems: "flex-start"
  },
  button: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    marginVertical: 10
  }
})

export default styles