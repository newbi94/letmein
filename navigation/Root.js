import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Tabs from "./Tabs";
import Stacks from "./Stacks";

const RootNav = createNativeStackNavigator();

const Root = () => {
  return (
    <RootNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootNav.Screen name="Tabs" component={Tabs} />
      <RootNav.Screen name="Stacks" component={Stacks} />
    </RootNav.Navigator>
  );
};

export default Root;
