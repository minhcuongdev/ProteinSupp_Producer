import { View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FAB } from 'react-native-paper';
import Color from 'src/constants/Color';
import styles from './ProductStyles'
import ScrollableTabs from 'src/components/ScrollableTabs/ScrollableTabs'
import ProductCard from 'src/components/Card/ProductCard'
import { useNavigation } from '@react-navigation/native';
import productApi from 'src/apis/productApi';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setPromotionalProducts } from 'src/redux/slices/productSlice'
import { setSnackBar } from 'src/redux/slices/snackBarSlice';

const productDummy = [
  {
    id: 0,
    nameProduct: "Labrada Leanbody For Her",
    price: "3.500.000",
    uri: "..."
  },
  {
    id: 1,
    nameProduct: "Labrada Leanbody For Her",
    price: "3.500.000",
    uri: "..."
  },
  {
    id: 2,
    nameProduct: "Labrada Leanbody For Her",
    price: "3.500.000",
    uri: "..."
  },
  {
    id: 3,
    nameProduct: "Labrada Leanbody For Her",
    price: "3.500.000",
    uri: "..."
  },
  {
    id: 4,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  }, {
    id: 5,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 6,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 7,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 8,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
  {
    id: 9,
    nameProduct: "Labrada Leanbody For Her",
    priceProduct: "3.500.000",
    uri: "..."
  },
]

const Product = () => {
  const [indexCategory, setIndexCategory] = useState(0)
  const [productCategory, setProductCategory] =useState([])
  const navigation = useNavigation();
  const dispatch = useDispatch(); 
  const products = useSelector(state => state.product.products)

  const callApi = async () => {
    try {
      const products = await productApi.getAllProduct()

      const promotionalProduct = products.filter(product => product.promotional)
      dispatch(setProducts(products))
      dispatch(setPromotionalProducts(promotionalProduct))
      
      const proteinGainWeight = products.filter(product => product?.typeProduct.includes("Protein & gain weight"))
      setProductCategory(proteinGainWeight)

    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.message
      }))
    }
  }

  useEffect(() => {
    callApi()
  }, [])

  useEffect(() => {
    renderCategoryProducts()
  },[indexCategory])

  const renderCategoryProducts = () => {
    switch (indexCategory) {
      case 0:
        const proteinGainWeight = products.filter(product => product?.typeProduct.includes("Protein & gain weight"))
        setProductCategory(proteinGainWeight)
        break
      case 1:
        const proteinEnergyHealth = products.filter(product => product?.typeProduct.includes("Energy & Health"))
        setProductCategory(proteinEnergyHealth)
        break
      case 2:
        const proteinLoseFatLoseWeight = products.filter(product => product?.typeProduct.includes("Lose fat & Lose weight"))
        setProductCategory(proteinLoseFatLoseWeight)
        break
      default:
        break
    }
  }

  const renderCartProduct = ({ item }) => (
    <ProductCard nameProduct={item.name} priceProduct={item.price} uriImage={item.imageProduct} productId={item._id} />
  );

  return (
    <View style={styles.container}>
      <View>
        <ScrollableTabs index={indexCategory} setIndex={setIndexCategory} />
      </View>
      <View style={styles.body}>
        <FlatList
          data={productCategory}
          renderItem={renderCartProduct}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
      <FAB
        style={styles.fab}
        label="Add more"
        uppercase={false}
        small
        icon="plus" 
        color={Color.WHITE}
        onPress={() => navigation.navigate("Create new product")}
      />
    </View>
  )
}

export default Product