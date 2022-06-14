import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingHorizontal: 25,
    paddingTop: 5
  },
  body: {
    flex: 1,
    marginTop: 15,
    flexWrap: "wrap",
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: "30%",
    bottom: 0,
    backgroundColor: Color.PRIMARY_YELLOW_COLOR,
  },
  textFieldWrapper :{
    marginVertical: 8
  },
  counterWrapper :{
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  imageWrapper: {
    marginVertical: 15
  },
  imageButton: {
    padding: 10,
    borderRadius: 10,
    borderColor: Color.PRIMARY_YELLOW_COLOR,
    borderWidth: 1,
    width: 70,
    marginTop: 10
  }
});

export default styles