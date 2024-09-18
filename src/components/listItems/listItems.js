import React from "react";
import { View, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import styles from "./listItemsStyle";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { WeatherType } from "../../utilities/WeatherType";
import { formatDateTime } from "../../functions/FormatDateTime";

const ListItems = (props) => {
  const { timezone, temp, feels_like, description, iconName } = props;
  const weatherType = WeatherType[iconName] || WeatherType["Clear"];
  const { icon, message } = weatherType;

  const formattedTime = formatDateTime(timezone);

  return (
    <View style={styles.item}>
      <MaterialCommunityIcons name={icon} size={24} color="white" />
      <View style={styles.textContainer}>
        <Text style={styles.currentTime}>{formattedTime}</Text>
        <Text style={styles.temp}>Temperature: {temp}</Text>
        <Text style={styles.feels_like}>Feels Like: {feels_like}</Text>
        <Text style={styles.description}>Description: {description}</Text>
      </View>
    </View>
  );
};

export default ListItems;
