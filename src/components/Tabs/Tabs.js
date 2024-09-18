import React from "react";
import styles from "./TabStyle";
import CurrentWeather from "../../screens/CurrentWeather/CurrentWeather";
import UpComingWeather from "../../screens/UpCommingWeather/UpComingWeather";
import City from "../../screens/City/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Current") {
            iconName = "weather-sunny";
          } else if (route.name === "Upcoming") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "City") {
            iconName = focused ? "city" : "city-variant-outline";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        headerStyle: styles.tabHeader,
      })}
    >
      <Tab.Screen name="Current">
        {() => (
          <CurrentWeather
            weatherData={weather.list[0]}
            description={weather.list[0].weather}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Upcoming">
        {() => <UpComingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen name="City">{() => <City />}</Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
