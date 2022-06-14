import { StyleSheet } from "react-native";

import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingHorizontal: 25,
    paddingVertical: 20
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center"
  },
  priceAndTitle:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "flex-end"
  },
  productContainer:{
    width: "100%"
  },
  text: {
    textAlign: "left",
    fontSize: 12,
    marginTop: 5 
  },
  description: {
    width: "100%",
    marginTop: 5
  },
  textWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  buttonRemove: {
    backgroundColor: Color.WHITE,
    borderWidth: 1,
    borderColor: Color.PRIMARY_YELLOW_COLOR,
    flex: 1,
  },
  buttonEdit: {
    backgroundColor: Color.PRIMARY_YELLOW_COLOR,
    flex: 1,
  },
  spacing: {
    height: 50
  }
})

export default styles