import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  TouchableNativeFeedback,
} from "react-native";
import HomePage from "src/screens/homepage/HomePage";
import Setting from "src/screens/setting/Setting";
import Order from "src/screens/order/Order";
import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

import HeaderTitle from "src/components/HeaderStackBar/HeaderTitle";
import Color from "src/constants/Color";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = (props) => {
  const { children, onPress } = props

  return (
  <TouchableNativeFeedback
    onPress={onPress}
    background={TouchableNativeFeedback.Ripple("#f1f1f1", true)}
  >
    <View {...props}>
      {children}
    </View>
  </TouchableNativeFeedback>
)};

const RootTab = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarHideOnKeyboard: true,
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium'
      },
      tabBarActiveTintColor: Color.PRIMARY_YELLOW_COLOR,
      tabBarInactiveTintColor: Color.NEUTRAL_03,
      tabBarStyle: {
        backgroundColor: Color.WHITE,
        height: 70,
        padding: 10
      },
      tabBarButton: props => <CustomTabBarButton {...props} />,
      headerTitle: props => <HeaderTitle {...props} />,
      headerTitleAlign: "center"
    }}
  >
    <Tab.Screen
      name="Manage"
      component={HomePage}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="store-alt" size={20} color={color} />
        ),
        headerShown: false
      }}
    />
    <Tab.Screen
      name="Manage Orders"
      component={Order}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="receipt-long" size={29} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={Setting}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-settings-sharp" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default RootTab;
