import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../views/Home";
import CountryScreen from "../views/country";
import WeatherScreen from "../views/weather";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Country" component={CountryScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
