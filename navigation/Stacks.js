import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import InsBtnSetting from "../screens/InsBtnSetting";

const NativeStack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="InsBtnSetting" component={InsBtnSetting} />
    </NativeStack.Navigator>
  );
};
export default Stacks;
