import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 12,
    elevation: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 20
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textWrapper: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems:"flex-start"
  },
  icon: {
    marginRight: 10
  },
  mark: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    borderWidth: 1
  },
  productItemOrderCardContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "flex-end",
  },
  productItemImageContainer: {
    marginRight: 10
  },
  productItemImage: {
    width: 80,
    height: 80
  },
  productItemOrderTextWrapper: {
    justifyContent: "flex-end",
    flex: 1,
  },
})

export default styles