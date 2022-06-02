import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "src/screens/login/Login";

import RootTab from "../TabNavigator/RootTab";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  const isSignIn = useSelector(state => state.account.isSignIn)
  

  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerLeft: (props) => <HeaderLeft {...props} />,
      // }}
    >
      {isSignIn ? (
        <>
          <Stack.Screen
            name="RootTab"
            component={RootTab}
            options={{ headerShown: false }}
          />
          
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