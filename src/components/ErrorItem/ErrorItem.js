import React from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./ErrorItemStyle";
const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Sorry something went wrong</Text>
      <MaterialCommunityIcons
        name="emoticon-sad-outline"
        size={100}
        color="black"
      />
    </View>
  );
};

export default ErrorItem;
