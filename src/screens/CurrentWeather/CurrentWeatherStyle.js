import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  currentWeather: {
    color: "black",
    fontSize: 48,
  },
  weather: {
    color: "black",
    fontSize: 40,
  },
  feels: {
    color: "black",
    fontSize: 25,
  },
  smallText: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyConten: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
});

export default styles;
