//Imports -- Built-in
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    borderWidth: 2,
    color: "white",
    padding: 12,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: "open-sans-bold",
  },
});
