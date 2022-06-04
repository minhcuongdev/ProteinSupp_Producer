import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  productContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginVertical: 15,
    width: 160,
    alignItems: "center",
    borderRadius: 20,
    elevation: 10,
  },
  img: {
    width: 120,
    height: 120,
  },
  namePr:{
    fontSize: 9,
    lineHeight: 14,
    color: Color.BLACK,
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center"
  },
  pricePr:{
    fontSize: 9,
    lineHeight: 14,
    color: Color.PRIMARY_YELLOW_COLOR,
    textAlign: "center"
  },
  productCartContainer: {
    flexDirection: "row",
    padding: 10 ,
    backgroundColor: Color.WHITE,
    elevation: 5,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10
  },
  checkboxWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Color.PRIMARY_YELLOW_COLOR,
    position: "relative"
  },
  iconCheckedBox: {
    width: 20,
    position: "absolute",
    top: -2,
    left: -2
  },
  product: {
    flexDirection: 'row',
    alignItems: "center"
  },
  imagePr :{
    width: 60,
    height: 60
  },
  textWrapper: {
    alignSelf: "flex-end",
    alignItems: "flex-start",
    justifyContent: "space-around",
    height: 50,
    marginLeft: 10,
  },
  textNamePr :{
    fontSize: 13,
    lineHeight: 15,
    width: 150,
    textAlign: "left",
    marginBottom: 10
  },
  textPricePr: {
    fontSize: 14,
    lineHeight: 20
  },
  counterContainer: {
    alignItems: "flex-end",
  },
  iconBin: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 20
  },
  addressCardContainer: {
    marginVertical: 15,
    marginHorizontal: 15,
    backgroundColor: Color.WHITE,
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 10,
    elevation: 10,
    flexDirection: "row"
  },
  infoUserWrapper: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent:"space-between"
  },
  nameUserText: {
    fontSize: 14
  },
  iconAddressWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 40,
    paddingBottom: 10
  },
  giftCardContainer: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: Color.PRIMARY_YELLOW_COLOR_4,
    alignItems :"center"
  },
  giftCardImageContainer: {
    marginRight: 20
  },
  giftCardImage: {
    width: 50,
    height: 50
  },
  contentGiftCardContainer: {
    alignItems: "flex-start",
    flex: 1,
  },
  timeGiftCardContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  orderCardContainer: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: Color.WHITE,
    elevation: 10,
    marginHorizontal: 25,
    marginVertical: 10
  },
  divide: {
    borderTopWidth: 1,
    borderTopColor: Color.PRIMARY_YELLOW_COLOR,
    marginVertical: 10
  },
  textOrderCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  followOrderCardContainer: {
    width: "90%",
    backgroundColor: Color.WHITE,
    elevation: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10
  },
  followOrderProductWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  followOrderCardTotalMoney: {
     flexDirection: "row",
     alignItems:"center"
  }
});

export default styles