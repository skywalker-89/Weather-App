import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/Tabs/Tabs";
import styles from "./styles/mainStyle";
import useGetWeather from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem/ErrorItem";

const Tab = createBottomTabNavigator();

const App = () => {
  const [loading, error, weather] = useGetWeather();
  // console.log(loading, error, weather);

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"black"} />
      )}
    </View>
  );
};

export default App;
