import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Course from "../screens/Course";
import Home from "../screens/Home";
import MyPage from "../screens/MyPage";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Course" component={Course} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

export default Tabs;
