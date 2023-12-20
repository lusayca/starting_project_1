import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children} </Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidht = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary500,
    padding: deviceWidht < 380 ? 12 : 24,
    margin: deviceWidht < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary500,
    fontSize: deviceWidht < 380 ? 12 : 24,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
