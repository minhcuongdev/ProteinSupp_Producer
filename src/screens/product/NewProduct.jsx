import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

import styles from './ProductStyles'
import MyEditTextField from 'src/components/MyEditTextField/MyEditTextField'
import { useState } from 'react'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import Counter from 'src/components/Counter/Counter'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MyDialog from 'src/components/MyDialog/MyDialog'
import { useNavigation } from '@react-navigation/native'

const NewProduct = () => {
  const navigation = useNavigation()

  const [productName, setProductName] = useState("")
  const [priceProduct, setPriceProduct] = useState("")
  const [informationProduct, setGeneralInformationProduct] = useState("")
  const [origin, setOrigin] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [ManufacturerPrice, setManufacturerPrice] = useState("")
  const [quantityCurrent, setQuantityCurrent] = useState(50)

  const [isVisibleDialog, setIsVisibleDialog] = useState(false);
  const toggleDialog = () => {
    setIsVisibleDialog(!isVisibleDialog);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.textFieldWrapper}>
          <MyEditTextField title={"Product name"} value={productName} setValue={setProductName} />
        </View>
        <View style={styles.textFieldWrapper}>
          <MyEditTextField title={"Product name"} value={priceProduct} setValue={setPriceProduct} keyboardType="numeric" />
        </View>
        <View style={styles.textFieldWrapper}>
          <MyEditTextField multiline={true} title={"General information"} value={informationProduct} setValue={setGeneralInformationProduct} numberOfLines={3} />
        </View>
        <View style={[styles.textFieldWrapper, { flexDirection: "row" }]}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <MyEditTextField title={"Origin"} value={origin} setValue={setOrigin} />
          </View>
          <View style={{ flex: 1 }}>
            <MyEditTextField title={"Manufacturer"} value={manufacturer} setValue={setManufacturer} />
          </View>
        </View>
        <View style={styles.textFieldWrapper}>
          <MyEditTextField title={"Manufacturer price"} value={ManufacturerPrice} setValue={setManufacturerPrice} keyboardType="numeric" />
        </View>
        <View style={styles.counterWrapper}>
          <MyText title={"Current quantity"} variant="h5" color={Color.NEUTRAL_02} />
          <Counter counter={quantityCurrent} actionIncrease={() => setQuantityCurrent(prev => prev + 1)} actionDecrease={() => setQuantityCurrent(prev => prev - 1)} />
        </View>
        <View>
          <MyText title={"Image"} variant="h5" color={Color.NEUTRAL_02} />
          <View style={styles.imageButton}>
            <MaterialCommunityIcons name="image-plus" size={45} color={Color.PRIMARY_YELLOW_COLOR} />
          </View>
        </View>
        <View style={styles.imageWrapper}>
          <PrimaryButton title={"Add"} handleOnPress={() => toggleDialog()} />
        </View>
        <MyDialog content={"You have added new product successfully!"} titleButton={"OK"} isVisibleDialog={isVisibleDialog} handleOnPress={() => {
          toggleDialog()
          navigation.goBack()
        }} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NewProduct