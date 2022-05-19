import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644", borderless: true }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        //IOS
        style={(pressData) => {
          pressData.pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,

    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#fff",
    padding: 10,
  },
});
