import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = ({
  navigation,
  primaryTheme,
  seconderyTheme,
  textTheme,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: seconderyTheme() }]}>
      <Text style={{ color: textTheme() }}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
