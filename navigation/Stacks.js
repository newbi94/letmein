import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import InsBtnSetting from "../screens/InsBtnSetting";
import Login from "../screens/Login";
import Letmein from "../screens/Letmein";

const NativeStack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="InsBtnSetting" component={InsBtnSetting} />
      <NativeStack.Screen name="Login" component={Login} />
      <NativeStack.Screen name="Letmein" component={Letmein} />
    </NativeStack.Navigator>
  );
};
export default Stacks;
