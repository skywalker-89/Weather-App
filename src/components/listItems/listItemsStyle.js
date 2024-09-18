import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 16,
  },
  currentTime: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  temp: {
    color: "#bbb",
    fontSize: 16,
    marginTop: 4,
  },
  feels_like: {
    color: "#bbb",
    fontSize: 16,
    marginTop: 4,
  },
  description: {
    color: "#bbb",
    fontSize: 16,
    marginTop: 4,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
    backgroundColor: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default styles;
