import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MyText = ({ title, textTheme }) => {
  return <Text style={[styles.text, { color: textTheme() }]}>{title}</Text>;
};

export default MyText;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});
