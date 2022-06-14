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
import { setSnackBar } from 'src/redux/slices/snackBarSlice';
import { setProducts } from 'src/redux/slices/productSlice';

const Product = () => {
  const [indexCategory, setIndexCategory] = useState(0)
  const [productCategory, setProductCategory] =useState([])
  const navigation = useNavigation();
  const dispatch = useDispatch(); 
  const products = useSelector(state => state.product.products)
  const [refreshing,setRefreshing] = useState(false)

  const callApi = async () => {
    try {
      const products = await productApi.getAllProduct()

      dispatch(setProducts(products))
            
      const proteinGainWeight = products.filter(product => product?.typeProduct.includes("Protein & Gain weight"))
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
  },[indexCategory, products])

  const renderCategoryProducts = () => {
    switch (indexCategory) {
      case 0:
        const proteinGainWeight = products.filter(product => product?.typeProduct.includes("Protein & Gain weight"))
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
      <View style={{marginTop: 10}}>
        <ScrollableTabs index={indexCategory} setIndex={setIndexCategory} />
      </View>
      <View style={styles.body}>
        <FlatList
          data={productCategory}
          renderItem={renderCartProduct}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          refreshing={refreshing}
          onRefresh={() => callApi()}
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