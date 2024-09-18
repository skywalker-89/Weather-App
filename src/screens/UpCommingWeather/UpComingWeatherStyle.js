import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "stretch",
  },
  title: {
    color: "white",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
    backgroundColor: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: "90%",
  },
  views: {
    width: "93%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 10, // Adjust the value to your preference
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
    marginTop: 10,
    alignSelf: "center",
  },
});

export default styles;
