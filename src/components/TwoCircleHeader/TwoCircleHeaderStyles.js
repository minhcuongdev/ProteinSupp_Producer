import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "23%",
    position: "relative",
  },
  headerRedCircle: {
    width: 200,
    height: 200,
    backgroundColor: Color.PRIMARY_RED_COLOR,
    borderRadius: 100,
    position: "absolute",
    left: 60,
    top: -100

  },
  headerYellowCircle: {
    width: 200,
    height: 200,
    backgroundColor: Color.PRIMARY_YELLOW_COLOR,
    borderRadius: 100,
    position: "absolute",
    left: -70,
    top: -30
  }
})

export default styles