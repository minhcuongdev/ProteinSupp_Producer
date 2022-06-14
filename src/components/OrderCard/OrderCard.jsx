import { View, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyText from '../MyText/MyText'

import styles from './OrderCardStyles'
import { FormatMoney, FormatStringToBirthday } from 'src/utils/Calculator'
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Color from 'src/constants/Color'
import { useNavigation } from '@react-navigation/native'

export const ProductItem = ({ title, price, quality, uriImage }) => {
  return (
    <View style={styles.productItemOrderCardContainer}>
      <View style={styles.productItemImageContainer}>
        {uriImage ? <Image source={{uri: uriImage}} style={styles.productItemImage} /> : <Image source={productDefaultImage} style={styles.productItemImage} />}
        
      </View>
      <View style={styles.productItemOrderTextWrapper}>
        <MyText title={title} variant="h1" style={{ fontSize: 12, alignSelf: "flex-start", lineHeight: 18 }} color={Color.NEUTRAL_02} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }} >
          <MyText title={`${price} đ`} variant="h1" style={{ fontSize: 14, alignSelf: "flex-start" }} color={Color.NEUTRAL_02} />
          <MyText title={`x${quality}`} variant="h1" style={{ fontSize: 13, alignSelf: "flex-start" }} color={Color.NEUTRAL_02} />
        </View>
      </View>
    </View>
  )
}

export const MarkStatus = ({ status }) => {
  const [color, setColor] = useState(Color.PRIMARY_RED_COLOR)

  useEffect(() => {
    switch (status) {
      case "Preparing":
        setColor(() => Color.PRIMARY_RED_COLOR)
        break;
      case "Delivering":
        setColor(() => Color.GREEN)
        break;
      case "Delivered":
        setColor(() => Color.PRIMARY_YELLOW_COLOR)
        break;
      default:
        setColor(() => Color.CANCEL)
        break;
    }
  }, [status])

  return (<View style={[styles.mark, { borderColor: color }]}>
    <MyText title={status} style={{ color: color, fontSize: 12 }} variant="h2" />
  </View>)
}

const OrderCard = ({ receivedUser, totalPrice, phoneReceivedUser, address, dateOrder, status, cancel, billId }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Order Detail",{billId: billId})} style={({ pressed }) => [
      {
        backgroundColor: pressed
          ? Color.WHITE_ACTIVE
          : Color.WHITE
      },
      styles.container
    ]}>
      <View style={styles.wrapper}>
        <MyText title={receivedUser} variant="h2" color={Color.BLACK} style={{ fontSize: 14, width: "70%", textAlign: "left" }} />
        <MyText title={`${FormatMoney(totalPrice)}đ`} variant="h2" color={Color.BLACK} style={{ fontSize: 14 }} />
      </View>
      <View style={styles.textWrapper}>
        <MaterialCommunityIcons name="phone-forward" size={20} color={Color.BLACK} style={styles.icon} />
        <MyText title={phoneReceivedUser} style={{ fontSize: 12 }} color={Color.BLACK} />
      </View>
      <View style={styles.textWrapper}>
        <Octicons name="location" size={21} color={Color.BLACK} style={styles.icon} />
        <MyText numberOfLines={2} style={{ textAlign: "left", fontSize: 12 }} title={address} color={Color.BLACK} />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.textWrapper}>
          <MaterialCommunityIcons name="alarm" size={20} color={Color.BLACK} style={styles.icon} />
          <MyText title={`${FormatStringToBirthday(dateOrder)}`} style={{ fontSize: 12 }} color={Color.BLACK} />
        </View>
        {cancel ? <MarkStatus status={"Cancel"} /> : <MarkStatus status={status} />}
      </View>
    </Pressable>
  )
}

export default OrderCard