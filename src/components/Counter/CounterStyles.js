import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 80,
    height: 30,
    backgroundColor : Color.GRAY_01,
    justifyContent :"space-between",
    paddingHorizontal: 5,
    alignItems: "center",
    borderRadius: 10,
    alignSelf :"flex-end"
  },
  symbol:{
    height: 30,
    borderRadius: 10,
    justifyContent: 'center'
  },
  number: {
    backgroundColor: Color.GRAY_02,
    width: 24,
    height: 24,
    borderRadius: 12,
    textAlign: "center",
    lineHeight: 18,
    fontWeight: "bold",
    fontSize: 12
  },
})

export default styles