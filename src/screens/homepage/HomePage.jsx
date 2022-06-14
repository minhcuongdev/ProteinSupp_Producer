import { View, Pressable, Image } from 'react-native'
import React from 'react'
import MyText from 'src/components/MyText/MyText'

import styles from './HomePageStyles'
import defaultImage from 'src/assets/images/default-user-image.png'
import Color from 'src/constants/Color'

import UtilsCard from 'src/components/UtilsCard/UtilsCard'
import FollowOrderCard from 'src/components/FollowOrderCard/FollowOrderCard'
import StatisticCard from 'src/components/StatisticCard/StatisticCard.jsx'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { MaterialCommunityIcons, Ionicons, FontAwesome5, MaterialIcons, Fontisto, Entypo } from '@expo/vector-icons';

const HomePage = () => {
  const user = useSelector(state => state.account.account)
  const navigation = useNavigation();

  const UtilsCardList = [{
    id: 0,
    Icon: MaterialCommunityIcons,
    nameIcon: "pencil-plus",
    sizeIcon: 30,
    title: "Create Order",
    onTap: () => {console.log("Create Order")}
  },{
    id: 1,
    Icon: Ionicons,
    nameIcon: "md-trash-bin-sharp",
    sizeIcon: 30,
    title: "Product",
    onTap: () => {navigation.navigate("Products")}
  },{
    id: 2,
    Icon: FontAwesome5,
    nameIcon: "shopping-bag",
    sizeIcon: 30,
    title: "Manage",
    onTap: () => {console.log("Manage")}
  },{
    id: 3,
    Icon: MaterialIcons,
    nameIcon: "storefront",
    sizeIcon: 30,
    title: "Stock",
    onTap: () => {console.log("Stock")}
  },{
    id: 4,
    Icon: Entypo,
    nameIcon: "bar-graph",
    sizeIcon: 30,
    title: "Report",
    onTap: () => {console.log("Report")}
  },{
    id: 5,
    Icon: Ionicons,
    nameIcon: "person",
    sizeIcon: 30,
    title: "Customer",
    onTap: () => {console.log("Customer")}
  },{
    id: 6,
    Icon: Fontisto,
    nameIcon: "shopping-sale",
    sizeIcon: 30,
    title: "Voucher",
    onTap: () => {console.log("Voucher")}
  },{
    id: 7,
    Icon: FontAwesome5,
    nameIcon: "gift",
    sizeIcon: 30,
    title: "Gift",
    onTap: () => {console.log("Gift")}
  }]

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
          <Pressable onPress={() => {}}>
            {user.profilePicture ?
              <Image source={{
                uri: user.profilePicture
              }} style={styles.avatar} />
              :
              <Image source={defaultImage} style={styles.avatar} />
            }
          </Pressable>
          <View style={styles.textWrapper}>
            <MyText title={"Welcome Back!"} variant="h4" color={Color.PRIMARY_YELLOW_COLOR} style={{ textAlign: "left" }} />
            <MyText title={user.username} numberOfLines={2} variant="body1" color={Color.PRIMARY_YELLOW_COLOR} style={{ lineHeight: 27, width: 250, textAlign: "left", fontSize: 20 }} />
          </View>
        </View>
        <View style={{marginTop:  20}}>
          <StatisticCard />
        </View>
        <View style={{marginTop: 20, flexDirection: "row", flexWrap: "wrap"}}>
          {UtilsCardList.map((card) => <UtilsCard 
          key={card.id} 
          title={card.title}
          Icon={card.Icon}
          nameIcon={card.nameIcon}
          sizeIcon={card.sizeIcon}
          onTap={card.onTap}
        />)}
        </View>
        <View style={{marginTop: 20}}>
          <FollowOrderCard />
        </View>
    </View>
  )
}

export default HomePage