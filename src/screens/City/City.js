import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from "react-native";
import styles from "./CityStyle";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import useGetLocation from "../../hooks/useGetLocation";
import useGetCityPopulation from "../../hooks/useGetCityPopulation";
import ErrorItem from "../../components/ErrorItem/ErrorItem";
import useGetWeather from "../../hooks/useGetWeather";
import useGetCityImage from "../../hooks/useGetCityImage";
import formatTime from "../../functions/FormatTime";

const City = () => {
  const [loadingLocation, errorLocation, location] = useGetLocation();
  const [loadingPopulation, errorPopulation, population] = useGetCityPopulation(
    location.country
  );
  const [loading, error, weather] = useGetWeather();
  const [loadingImage, errorImage, image] = useGetCityImage(
    location.city,
    "city"
  );

  if (loadingLocation || loadingPopulation || loading || loadingImage) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  if (errorLocation || errorPopulation || error || errorImage) {
    return (
      <Text>{errorLocation || errorPopulation || error || errorImage}</Text>
    );
  }

  const { city, country } = location;

  return (
    <SafeAreaView style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.views} />}
      <Text style={styles.cityName}>{city}</Text>
      <Text style={styles.countryName}>{country}</Text>
      <View style={styles.populationWrapper}>
        <FontAwesome6 name="people-group" size={24} color="black" />
        <Text style={styles.populationText}>{population}</Text>
      </View>
      <View style={styles.sunWrapper}>
        <Text style={styles.sunText}>
          <Feather name="sunrise" size={24} color="black" /> :{" "}
          {formatTime(weather.city.sunrise)}
        </Text>
        <Text style={styles.sunText}>
          <Feather name="sunset" size={24} color="black" /> :{" "}
          {formatTime(weather.city.sunset)}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default City;
