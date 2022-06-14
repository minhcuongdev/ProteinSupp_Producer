import { View, TouchableWithoutFeedback, Keyboard, Pressable, Image } from 'react-native'
import React from 'react'

import styles from './ProductStyles'
import MyEditTextField from 'src/components/MyEditTextField/MyEditTextField'
import { useState } from 'react'
import MyText from 'src/components/MyText/MyText'
import Color from 'src/constants/Color'
import Counter from 'src/components/Counter/Counter'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MyDialog, { MyDialogLoading } from 'src/components/MyDialog/MyDialog'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from '@expo/vector-icons';
import productApi from 'src/apis/productApi'
import { useDispatch } from 'react-redux'
import { setSnackBar } from 'src/redux/slices/snackBarSlice'
import { setProduct } from 'src/redux/slices/productSlice'

const NewProduct = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [productName, setProductName] = useState("")
  const [priceProduct, setPriceProduct] = useState("")
  const [informationProduct, setGeneralInformationProduct] = useState("")
  const [origin, setOrigin] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [manufacturerPrice, setManufacturerPrice] = useState("")
  const [quantityCurrent, setQuantityCurrent] = useState(50)
  const [images, setImages] = useState("")
  const [loading,setLoading] = useState(false)

  const [isVisibleDialog, setIsVisibleDialog] = useState(false);
  const toggleDialog = () => {
    setIsVisibleDialog(!isVisibleDialog);
  };

  const callApi = async (payload) => {
    setLoading(true)
    try {
      const response = await productApi.createProduct(payload)
      dispatch(setProduct(response))
      setIsVisibleDialog(true)
    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.response.data
      }))
    } finally {
      setLoading(false)
    }
  }

  const openCamera = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.cancelled) {
      setImages(result.uri)
    }

  }

  const handleAdd = () => {
    const payload = {
      name: productName,
      price: Number(priceProduct),
      description: informationProduct,
      origin: origin,
      manufacturer: manufacturer,
      manufacturerPrice: Number(manufacturerPrice),
      promotional: true,
      imageProduct: images
    }
    callApi(payload)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.textFieldWrapper}>
          <MyEditTextField title={"Product name"} value={productName} setValue={setProductName} />
        </View>
        <View style={styles.textFieldWrapper}>
          <MyEditTextField title={"Product price"} value={priceProduct} setValue={setPriceProduct} keyboardType="numeric" />
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
          <MyEditTextField title={"Manufacturer price"} value={manufacturerPrice} setValue={setManufacturerPrice} keyboardType="numeric" />
        </View>
        <View style={styles.counterWrapper}>
          <MyText title={"Current quantity"} variant="h5" color={Color.NEUTRAL_02} />
          <Counter counter={quantityCurrent} actionIncrease={() => setQuantityCurrent(prev => prev + 1)} actionDecrease={() => setQuantityCurrent(prev => prev - 1)} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          {images.length > 0 &&
            <View>
              
              <Image
                source={{
                  uri: images
                }}
                style={{ width: 60, height: 70, marginRight: 10, borderRadius: 10 }}
              />
              <Pressable onPress={() => setImages("")} style={{position: "absolute", top: -10, right: 5}} >
                <Entypo name="circle-with-cross" size={24} color={"black"} />
              </Pressable>
            </View>
          }

          <Pressable onPress={() => images.length > 0 ? {} : openCamera()}>
            <MyText title={"Image"} variant="h5" color={Color.NEUTRAL_02} />
            <View style={[styles.imageButton, { opacity: images.length > 0 ? 0.5 : 1 }]}>
              <MaterialCommunityIcons name="image-plus" size={45} color={Color.PRIMARY_YELLOW_COLOR} />
            </View>
          </Pressable>
        </View>
        <View style={styles.imageWrapper}>
          <PrimaryButton title={"Add"} handleOnPress={() => handleAdd()} />
        </View>
        <MyDialog content={"You have added new product successfully!"} titleButton={"OK"} isVisibleDialog={isVisibleDialog} handleOnPress={() => {
          toggleDialog()
          navigation.goBack()
        }} />
        <MyDialogLoading isVisible={loading} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NewProduct