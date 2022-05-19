import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{ padding: 50, flexDirection: "row", height: 500, width: "90%" }}
    >
      <View
        style={{
          backgroundColor: "red",
          flex: 2,
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
