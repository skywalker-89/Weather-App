import React from "react";
import { View, Text } from "react-native";

const OurChild = (props) => {
  const { message } = props;
  return (
    <View style={{ height: 200, width: 200, backgroundColor: "red" }}>
      <Text style={{ paddingLeft: 20, fontSize: 49 }}>{message}</Text>
    </View>
  );
};

export default OurChild;
