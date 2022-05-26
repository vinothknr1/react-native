//Imports -- Built-in
import { View, Text, StyleSheet, Dimensions } from "react-native";
//Imports -- Custom
import Colors from "../../constants/color";

//NumberContainer Component
function NumberContainer({ children }) {
  //Number Container JSX
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

//Stylesheet
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    //fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
