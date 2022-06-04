import { Image, Pressable } from 'react-native'
import React from 'react'

import styles from './CardStyles'
import MyText from '../MyText/MyText'
import Color from 'src/constants/Color'

import { useNavigation } from '@react-navigation/native'
import productDefaultImage from 'src/assets/images/productDefaultImage.png'
import { FormatMoney } from 'src/utils/Calculator'

const ProductCard = ({ nameProduct, priceProduct, uriImage, productId }) => {
  const navigation = useNavigation()

  return (
    <Pressable onPress={() => navigation.navigate("SingleProduct", { productId: productId })} style={({ pressed }) => [
      {
        backgroundColor: pressed
          ? Color.WHITE_ACTIVE
          : Color.WHITE,
      },
      styles.productContainer
    ]}>
      {uriImage ? <Image source={{ uri: uriImage }} resizeMode="cover" style={styles.img} /> : <Image source={productDefaultImage} resizeMode="cover" style={styles.img} />}
      <MyText title={nameProduct} variant="h1" style={styles.namePr} numberOfLines={2} />
      <MyText title={`${FormatMoney(priceProduct)} đ`} variant="h1" style={styles.pricePr} />
    </Pressable>
  )
}

export default ProductCard