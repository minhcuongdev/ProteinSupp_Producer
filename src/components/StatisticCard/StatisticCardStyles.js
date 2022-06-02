import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Color.WHITE,
    borderRadius: 20,
    elevation: 10,
  },
  statisticWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  reportWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20
  }
});

export default styles