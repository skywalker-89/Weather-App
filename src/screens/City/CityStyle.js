import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  views: {
    width: "90%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
    borderRadius: 10, // Adjust the value to your preference
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
  },
  cityName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
  },
  countryName: {
    fontSize: 24,
    color: "#666",
    marginBottom: 20,
  },
  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  populationText: {
    fontSize: 20,
    marginLeft: 10,
    color: "#333",
  },
  sunWrapper: {
    alignItems: "center",
  },
  sunText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
});

export default styles;
