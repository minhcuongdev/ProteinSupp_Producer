import { View, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from './OrderDetailStyles'
import { useRoute } from '@react-navigation/native'
import { getBillById, updateStatusBill } from 'src/redux/slices/billSlice'
import { useDispatch, useSelector } from 'react-redux'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import { FormatMoney, FormatStringToBirthday } from 'src/utils/Calculator'
import { MarkStatus } from 'src/components/OrderCard/OrderCard'
import { ProductItem } from 'src/components/OrderCard/OrderCard'
import SmallButton from 'src/components/SmallButton/SmallButton'
import { MyDialogConfirm } from 'src/components/MyDialog/MyDialog'
import { MyDialogLoading } from 'src/components/MyDialog/MyDialog'
import billApi from 'src/apis/billApi'
import { useNavigation } from '@react-navigation/native'
import { setSnackBar } from 'src/redux/slices/snackBarSlice'

const OrderStatusCard = ({ billId, dateOrder, status, cancel }) => {
  return (
    <View style={styles.orderStatus}>
      <View style={{ width: "60%" }}>
        <MyText title={`Order Id: ${billId}`} variant="h2" style={[styles.fontSize, { textAlign: "left" }]} />
        <MyText title={`Order date: ${FormatStringToBirthday(dateOrder || "")}`} style={{ fontSize: 12, textAlign: "left" }} />
      </View>
      {cancel ? <MarkStatus status={"Cancel"} /> : <MarkStatus status={status} />}
    </View>
  )
}

const StatusProgress = ({ status, active, onChange }) => {

  return (
    <View style={styles.statusProgressContainer}>
      <View style={styles.statusProgressItemContainer}>
        <MyText title={"Preparing"} color={Color.PRIMARY_YELLOW_COLOR} style={{ fontSize: 9 }} variant="h2" />
        <View style={styles.circleActive} />
      </View>
      <View style={[styles.line, styles.line1]} />
      <View style={styles.statusProgressItemContainer}>
        <MyText title={"Delivering"} color={Color.PRIMARY_YELLOW_COLOR} style={{ fontSize: 9 }} variant="h2" />
        <Pressable onPress={() => status === "Preparing" ? onChange() :  {} }>
          {status === "Preparing" ? (active ? <View style={styles.circleActive} /> : <View style={styles.circleInActive} />) : <View style={ styles.circleActive } />}
        </Pressable>
      </View>
      <View style={[styles.line, styles.line2]} />
      <View style={styles.statusProgressItemContainer}>
        <MyText title={"Delivered"} color={Color.PRIMARY_YELLOW_COLOR} style={{ fontSize: 9 }} variant="h2" />
        <Pressable onPress={() => status ==="Delivering" ? onChange() : {}}>
          {status === "Delivering" ? (active ? <View style={styles.circleActive} /> : <View style={styles.circleInActive} />) : (<View style={status === "Preparing" ? styles.circleInActive : styles.circleActive} />)}
        </Pressable>
      </View>
    </View>
  )
}

const InformationCard = ({ receivedUser, phoneReceivedUser, address }) => {

  return (
    <View style={styles.infoWrapper}>
      <MyText title={`${receivedUser} - ${phoneReceivedUser}`} variant="h2" style={styles.fontSize} />
      <MyText title={address} />
    </View>
  )
}

const OrderDetail = () => {
  const { billId } = useRoute().params;
  const dispatch = useDispatch();
  const bill = useSelector(state => state.bill.bill)
  const [visibleDialog, setVisibleDialog] = useState(false)
  const [activeUpdateStatus, setActiveUpdateStatus] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getBillById(billId))
  }, [])

  const handelUpdateStatus = () => {
    setVisibleDialog(true)
  }

  const updateStatus = async (status) => {
    setIsLoading(true)
    try {
      const response = await billApi.updateStatusBill(bill._id,status)
      dispatch(updateStatusBill(response))
      navigation.goBack()
    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.response.data
      }))
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = () => {
    let status = ""
    switch (bill.status) {
      case "Preparing":
        status = "Delivering"
        break;
      case "Delivering":
        status= "Delivered"
        break;
      default:
        break;
    }
    setVisibleDialog(false)
    updateStatus(status);
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.wrapper}>
          <MyText title={"Order status"} color={Color.PRIMARY_YELLOW_COLOR} variant="h2" style={{ textAlign: "left" }} />
          <OrderStatusCard billId={bill._id} dateOrder={bill.dateOrder} status={bill.status} cancel={bill.cancel} />
        </View>
        <View style={[styles.wrapper, { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }]}>
          <StatusProgress status={bill.status} active={activeUpdateStatus} onChange={() => setActiveUpdateStatus(prev => !prev)} />
          <SmallButton isDisable={bill.cancel || !activeUpdateStatus} label={"Accept"} onTap={() => handelUpdateStatus()} />
        </View>
        <View style={styles.wrapper}>
          <MyText title={"Consumer Information"} color={Color.PRIMARY_YELLOW_COLOR} variant="h2" style={{ textAlign: "left" }} />
          <InformationCard receivedUser={bill.receivedUser} phoneReceivedUser={bill.phoneReceivedUser} address={bill.address} />
        </View>
        <View style={styles.wrapper}>
          <MyText title={"Order information"} color={Color.PRIMARY_YELLOW_COLOR} variant="h2" style={{ textAlign: "left" }} />
          <View style={styles.productContainer}>
            <FlatList
              data={bill.products}
              renderItem={({ item }) => <ProductItem
                title={item.nameProduct}
                price={item.priceProduct}
                quality={item.quality}
                uriImage={item.imageProduct}
              />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
        <MyText title={"TOTAL"} variant="h1" color={Color.NEUTRAL_01} />
        <MyText title={`${FormatMoney(bill.totalPrice)}đ`} color={Color.PRIMARY_YELLOW_COLOR} variant="h1" />
      </View>
      <MyDialogConfirm content={"Are you sure to change order status?"}
        isVisibleDialog={visibleDialog}
        cancel={() => setVisibleDialog(false)}
        submit={() => handleSubmit()}
      />
      <MyDialogLoading isVisible={isLoading} />
    </View>
  )
}

export default OrderDetail