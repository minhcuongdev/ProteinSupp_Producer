import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingHorizontal: 25,
    paddingVertical: 10,
    justifyContent: "space-between"
  },
  wrapper: {
    marginVertical: 10
  },
  orderStatus: {
    backgroundColor: Color.WHITE,
    borderRadius: 10,
    elevation: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },
  fontSize: {
    fontSize: 13
  },
  infoWrapper: {
    backgroundColor: Color.WHITE,
    borderRadius: 10,
    elevation: 10,
    padding: 15,
    marginTop: 10,
    alignItems: "flex-start"
  },
  productContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    maxHeight: 300,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: Color.WHITE,
    marginTop: 10
  },
  statusProgressContainer: {
    flexDirection:"row",
    alignItems:"flex-end"
  },
  statusProgressItemContainer: {
    alignItems: "center",
    marginHorizontal: 15
  },
  circleActive: {
    width: 25, 
    height: 25, 
    borderRadius: 25, 
    backgroundColor: Color.PRIMARY_YELLOW_COLOR
  },
  circleInActive: {
    width: 25, 
    height: 25, 
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Color.PRIMARY_YELLOW_COLOR
  },
  line: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.PRIMARY_YELLOW_COLOR,
    width: 62,
    position: "absolute",
    top: "75%"
  },
  line1: {
    left: "21%",
    width: 65,
  },
  line2: {
    right: "21%"
  }
})

export default styles