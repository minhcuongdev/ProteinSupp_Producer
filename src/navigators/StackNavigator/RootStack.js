import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "src/screens/login/Login";
import Product from "src/screens/product/Product";
import NewProduct from "src/screens/product/NewProduct";
import SingleProduct from "src/screens/singleProduct/SingleProduct";
import EditProduct from "src/screens/product/EditProduct";

import RootTab from "../TabNavigator/RootTab";
import { useSelector } from "react-redux";
import HeaderLeft from "src/components/HeaderStackBar/HeaderLeft";
import HeaderTitle from "src/components/HeaderStackBar/HeaderTitle";

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  const isSignIn = useSelector((state) => state.account.isSignIn);

  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: (props) => <HeaderLeft {...props} />,
        headerTitle: (props) => <HeaderTitle {...props} />,
        headerBackVisible: false,
        headerTitleAlign: "center",
      }}
    >
      {isSignIn ? (
        <>
          <Stack.Screen
            name="RootTab"
            component={RootTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Products" component={Product} />
          <Stack.Screen name="Create new product" component={NewProduct} />
          <Stack.Screen
            name="SingleProduct"
            component={SingleProduct}
            options={{
              title: "",
            }}
          />
          <Stack.Screen name="Edit Product" component={EditProduct} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
