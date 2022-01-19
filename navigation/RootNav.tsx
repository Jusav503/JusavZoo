import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen/DetailsScreen";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const RootNav = () => {
  return (
    <NavigationContainer theme={DarkTheme} >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
