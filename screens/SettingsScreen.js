import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const SettingsScreen = ({
  navigation,
  primaryTheme,
  seconderyTheme,
  textTheme,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: seconderyTheme() }]}>
      <Text style={{ color: textTheme() }}>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
