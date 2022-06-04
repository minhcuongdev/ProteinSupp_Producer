import { View, Image, } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './SingleProductStyles'
import productDefaultImage from 'src/assets/images/productDefaultImage.png'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getProductById } from 'src/redux/slices/productSlice'
import { FormatMoney } from 'src/utils/Calculator'
import { MyDialogConfirm } from 'src/components/MyDialog/MyDialog'

const SingleProduct = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const product = useSelector(state => state.product.product)
  const { productId } = useRoute().params
  const [isVisibleDialog,setIsVisibleDialog] = useState(false);


  useEffect(() => {
    dispatch(getProductById(productId))
  }, [])

  return (
    <View style={styles.container}>
      {product?.imageProduct ?
        <Image source={{ uri: product.imageProduct }} resizeMode="contain" style={styles.image} /> :
        <Image source={productDefaultImage} resizeMode="contain" style={styles.image} />}
      <View style={styles.priceAndTitle}>
        <MyText title={product.name} numberOfLines={2} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} />
        <MyText title={`${FormatMoney(product.price)} đ`} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
      <View style={styles.productContainer}>
        <MyText
          title={product.description}
          variant="h4"
          color={Color.NEUTRAL_01}
          style={styles.text}
          numberOfLines={3}
        />
        <View style={styles.description}>
          <MyText title={"Description"} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} style={{ textAlign: "left" }} />
          <View style={styles.textWrapper}>
            <MyText title={"Product ID"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
            <MyText title={product.productId} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
          </View>
          <View style={styles.textWrapper}>
            <MyText title={"Manufacturer"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
            <MyText title={product.manufacturer} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
          </View>
          <View style={styles.textWrapper}>
            <MyText title={"Origin"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
            <MyText title={product.origin} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
          </View>
          <View style={styles.textWrapper}>
            <MyText title={"Manudactuer Price"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
            <MyText title={`${product.manufacturerPrice} đ`} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
          </View>
        </View>
      </View>
      <View style={styles.spacing}></View>
      <View style={styles.buttonContainer}>
        <View style={{flex:1}}>
        <PrimaryButton title={"Remove"} handleOnPress={() => setIsVisibleDialog(true)} style={styles.buttonRemove} color={Color.PRIMARY_YELLOW_COLOR} marginRight={5} />
        </View>
        <View style={{flex: 1}}>
        <PrimaryButton title={"Edit"} handleOnPress={() => navigation.navigate("Edit Product",{productId:productId })} style={styles.buttonEdit} marginLeft={5} />
        </View>
      </View>
      <MyDialogConfirm 
        content={"Are you sure to remove this product information ?"}
        isVisibleDialog={isVisibleDialog}
        cancel={() => setIsVisibleDialog(false)}
        submit={() => navigation.goBack()}
      />
    </View>
  )
}

export default SingleProduct
