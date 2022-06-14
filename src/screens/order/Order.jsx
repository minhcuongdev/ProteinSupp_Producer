import { View, TouchableWithoutFeedback, Keyboard, FlatList, RefreshControl, ScrollView } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'

import styles from './OrderStyles'
import Search from 'src/components/Search/Search'
import { ScrollableOrderTabs } from 'src/components/ScrollableTabs/ScrollableTabs'
import OrderCard from 'src/components/OrderCard/OrderCard'

import billApi from 'src/apis/billApi'
import { useDispatch, useSelector } from 'react-redux'
import { setBills } from 'src/redux/slices/billSlice'
import { setSnackBar } from 'src/redux/slices/snackBarSlice'

const Order = () => {
  const [searchText, setSearchText] = useState('')
  const [indexTab, setIndexTab] = useState(0)
  const dispatch = useDispatch();
  const bills = useSelector(state => state.bill.bills)
  const [billList, setBillList] = useState(bills)
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    callApi()
    setRefreshing(false)
  }, []);

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    try {
      const bills = await billApi.getAllBill();
      setBillList(bills)
      dispatch(setBills(bills))
      setIndexTab(prev => 0)
    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.response.data
      }))
    }
  }

  const renderBills = () => {
    switch (indexTab) {
      case 0:
        setBillList(bills)
        break
      case 1:
        const preparingBills = bills.filter(bill => bill.status === "Preparing" && bill.cancel === false)
        setBillList(preparingBills)
        break
      case 2:
        const deliveringBills = bills.filter(bill => bill.status === "Delivering")
        setBillList(deliveringBills)
        break
      case 3:
        const deliveredBill = bills.filter(bill => bill.status === "Delivered")
        setBillList(deliveredBill)
        break
      case 4:
        const cancelBill = bills.filter(bill => bill.cancel === true)
        setBillList(cancelBill)
        break
      default:
        break
    }
  }

  useEffect(() => {
    renderBills()
  }, [indexTab, bills])

  const search = (data) => {
    return data.filter(item => {
      if("cancel".includes(searchText.toLocaleLowerCase()) && item.cancel) return item;
      return (item.status.toLowerCase().includes(searchText.toLowerCase()) && !item.cancel )||
        item.receivedUser.toLowerCase().includes(searchText.toLowerCase()) ||
        item.address.toLowerCase().includes(searchText.toLowerCase()) ||
        item.dateOrder.toLowerCase().includes(searchText.toLowerCase())
    })
  }

  return (
    <View style={styles.container} >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <View style={{ paddingHorizontal: 20 }}>
            <Search value={searchText} onChange={setSearchText} />
          </View>
          <View style={{ marginVertical: 20, paddingHorizontal: 20 }}>
            <ScrollableOrderTabs index={indexTab} setIndex={setIndexTab} />
          </View>
        </>
      </TouchableWithoutFeedback>
      <View style={{ flex: 1 }} >
        <FlatList
          data={search(billList)}
          renderItem={({ item }) => <OrderCard
            receivedUser={item.receivedUser}
            totalPrice={item.totalPrice}
            phoneReceivedUser={item.phoneReceivedUser}
            address={item.address}
            dateOrder={item.dateOrder}
            status={item.status}
            cancel={item.cancel}
            billId={item._id}
          />}
          keyExtractor={item => item._id}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>
    </View>

  )
}

export default Order