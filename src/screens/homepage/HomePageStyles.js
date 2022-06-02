import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 10,
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingHorizontal: 25,
    paddingBottom: 10
  },
  headerWrapper:{
    flexDirection: "row",
    alignItems: "center"
  },
  textWrapper: {
    marginLeft: 10
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 28
  },
})

export default styles