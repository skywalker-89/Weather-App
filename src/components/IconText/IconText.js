import React from "react";
import { View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import styles from "./IconTextStyle";

const IconText = () => {
  return (
    <Text style={styles.sunText}>
      <Feather name="sunrise" size={24} color="black" /> : 10:12 am
    </Text>
  );
};

export default IconText;
