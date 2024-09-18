import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./CurrentWeatherStyle";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { WeatherType } from "../../utilities/WeatherType";

export default function CurrentWeather({ weatherData }) {
  const {
    main: { temp, feels_like, temp_max, temp_min, humidity },
    weather,
  } = weatherData;

  const weatherDescription = weather[0].description;
  const weatherCondition = weather[0].main;
  // console.log(weatherData);

  // Get the weather type info based on weatherCondition
  const weatherType = WeatherType[weatherCondition] || WeatherType["Clear"];
  const { icon, message } = weatherType;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.currentWeather}>Current Weather</Text>
        <MaterialCommunityIcons name={icon} size={100} color="black" />
        <Text style={styles.weather}>{`${temp}°C`}</Text>
        <Text style={styles.feels}>Feels like {`${feels_like}°C`}</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.smallText}>{`High: ${temp_max}°C`}</Text>
          <Text style={styles.smallText}>{`Low: ${temp_min}°C`}</Text>
        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <Text style={styles.smallText}>{`Humidity: ${humidity}%`}</Text>
        <Text style={styles.smallText}>{weatherDescription}</Text>
      </View>
    </SafeAreaView>
  );
}
