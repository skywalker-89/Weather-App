import React, { useEffect } from "react";
import { SafeAreaView, Text, FlatList, View, Image } from "react-native";
import styles from "./UpComingWeatherStyle";
import ListItems from "../../components/listItems/listItems";
import useGetCityImage from "../../hooks/useGetCityImage";
import useGetLocation from "../../hooks/useGetLocation";
import { ActivityIndicator } from "react-native";

const Empty = () => {
  return (
    <View>
      <Text>Empty</Text>
    </View>
  );
};

export default function UpComingWeather({ weatherData }) {
  const renderItem = ({ item }) => (
    <ListItems
      timezone={item.dt_txt}
      temp={item.main.temp}
      feels_like={item.main.feels_like}
      description={item.weather[0].description}
      iconName={item.weather[0].main}
    />
  );
  const [loadingLocation, errorLocation, location] = useGetLocation();
  const [loadingImage, errorImage, image] = useGetCityImage(
    location.country,
    "country"
  );
  console.log(location.country);

  if (loadingLocation || loadingImage) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  if (errorLocation || errorImage) {
    return <Text>{errorLocation || errorImage}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>Upcoming Weather</Text> */}
      {image && <Image source={{ uri: image }} style={styles.views} />}
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt.toString()}
        ListEmptyComponent={<Empty />}
      />
    </SafeAreaView>
  );
}
