import { View, TouchableWithoutFeedback, Keyboard, Pressable, Image } from 'react-native'
import React, {useEffect} from 'react'

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
import { useRoute } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { getProductById } from 'src/redux/slices/productSlice'
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from '@expo/vector-icons';

const EditProduct = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const product = useSelector(state => state.product.product)
  const {productId} = useRoute().params;

  useEffect(() => {
    dispatch(getProductById(productId))
  }, [])


  const [productName, setProductName] = useState(product.name)
  const [priceProduct, setPriceProduct] = useState(`${product.price}`)
  const [informationProduct, setGeneralInformationProduct] = useState(product.description)
  const [origin, setOrigin] = useState(product.origin)
  const [manufacturer, setManufacturer] = useState(product.manufacturer)
  const [manufacturerPrice, setManufacturerPrice] = useState(`${product.manufacturerPrice}`)
  const [image,setImage] = useState(product.imageProduct)
  const [quantityCurrent, setQuantityCurrent] = useState(50)

  const [isVisibleDialog, setIsVisibleDialog] = useState(false);
  const toggleDialog = () => {
    setIsVisibleDialog(!isVisibleDialog);
  };

  const openCamera = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }

  }

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
        <View style={[styles.textFieldWrapper, {flexDirection: "row"}]}>
          <View style={{flex: 1, marginRight: 10}}>
            <MyEditTextField title={"Origin"} value={origin} setValue={setOrigin}  />
          </View>
          <View style={{flex: 1}}>
            <MyEditTextField title={"Manufacturer"} value={manufacturer} setValue={setManufacturer}  />
          </View>
        </View>
        <View style={styles.textFieldWrapper}>
            <MyEditTextField title={"Manufacturer price"} value={manufacturerPrice} setValue={setManufacturerPrice} keyboardType="numeric"  />
        </View>
        <View style={styles.counterWrapper}>
          <MyText title={"Current quantity"} variant="h5" color={Color.NEUTRAL_02} />
          <Counter counter={quantityCurrent} actionIncrease={() => setQuantityCurrent(prev => prev+1)} actionDecrease={() => setQuantityCurrent(prev => prev-1)} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          {image.length > 0 &&
            <View>
              
              <Image
                source={{
                  uri: image
                }}
                style={{ width: 60, height: 70, marginRight: 10, borderRadius: 10 }}
              />
              <Pressable onPress={() => setImage("")} style={{position: "absolute", top: -10, right: 5}} >
                <Entypo name="circle-with-cross" size={24} color={"black"} />
              </Pressable>
            </View>
          }

          <Pressable onPress={() => image.length > 0 ? {} : openCamera()}>
            <MyText title={"Image"} variant="h5" color={Color.NEUTRAL_02} />
            <View style={[styles.imageButton, { opacity: image.length > 0 ? 0.5 : 1 }]}>
              <MaterialCommunityIcons name="image-plus" size={45} color={Color.PRIMARY_YELLOW_COLOR} />
            </View>
          </Pressable>
        </View>
        <View style={styles.imageWrapper}>
          <PrimaryButton title={"Save"} handleOnPress={() => toggleDialog()} />         
        </View>
        <MyDialog content={"update product information successfully!"} titleButton={"Got it"} isVisibleDialog={isVisibleDialog} handleOnPress={() => { 
        toggleDialog()
        navigation.goBack()
      }} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default EditProduct