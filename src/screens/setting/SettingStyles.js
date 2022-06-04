import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: Color.WHITE
  },
  itemButtonContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-end",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginVertical: 10
  },
  icon: {
    marginRight: 20,
    width: 40,
    height: 30,
    textAlign: "center",
    lineHeight: 30,
  },
  text: {
    fontSize: 14,
    lineHeight: 18
  }
})

export default styles