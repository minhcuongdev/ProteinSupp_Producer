import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {

  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.NEUTRAL_04
  },
  title: {
    textAlign: "left",
    marginBottom : 5
  },
  iconCalender: {
    padding: 4, 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    justifyContent: "center", 
    alignItems: "center",
    position: 'absolute',
    right: 5,
    top: 4
  }
})

export default styles