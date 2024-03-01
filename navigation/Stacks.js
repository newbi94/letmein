import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const NativeStack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen />
    </NativeStack.Navigator>
  );
};
export default Stacks;
