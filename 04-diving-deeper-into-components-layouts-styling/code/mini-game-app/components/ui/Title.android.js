//Imports -- Built-in
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

//Title Component
const Title = ({ children, style }) => {
  //Title Component JSX
  return (
    <View>
      <Text style={[styles.title, style]}>{children}</Text>
    </View>
  );
};
export default Title;

//Stylesheet
const styles = StyleSheet.create({
  title: {
    borderColor: "white",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    //borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    padding: 12,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: "open-sans-bold",
    maxWidth: "80%",
    width: 300,
  },
});
