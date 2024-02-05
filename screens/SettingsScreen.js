import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const SettingsScreen = ({
  navigation,
  route,
  primaryTheme,
  seconderyTheme,
  textTheme,
}) => {
  return (
    <>
      <View style={[styles.container, { backgroundColor: primaryTheme() }]}>
        <View
          style={[styles.subContainer, { backgroundColor: seconderyTheme() }]}
        >
          {/**Column */}
          <View style={styles.column}>
            {/**Row */}
            <View style={styles.row}>
              <TextInput
                placeholder="Max Limit"
                placeholderTextColor="gray"
                style={[
                  styles.input,
                  {
                    backgroundColor: primaryTheme(),
                    color: textTheme(),
                    borderColor: "transparent",
                  },
                ]}
              ></TextInput>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: primaryTheme() }]}
              >
                <Text style={[styles.text, { color: textTheme() }]}>
                  Set Limit
                </Text>
              </TouchableOpacity>
            </View>
            {/**Row */}
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: primaryTheme() }]}
              >
                <Text style={[styles.text, { color: textTheme() }]}>
                  Clear All Data
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: primaryTheme() }]}
              >
                <Text style={[styles.text, { color: textTheme() }]}>
                  History
                </Text>
              </TouchableOpacity>
            </View>
            {/**Row */}
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: primaryTheme() }]}
              >
                <Text style={[styles.text, { color: textTheme() }]}>
                  Reset Day
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: primaryTheme() }]}
              >
                <Text style={[styles.text, { color: textTheme() }]}>
                  Toggle Theme
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  text: {
    fontSize: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 0,
    width: "45%",
    height: 50,
  },
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    width: "45%",
    height: 50,
    padding: 15,
    fontSize: 16,
    margin: 0,
  },
  row: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
  },
  column: {
    flexDirection: "column",
    gap: 15,
    justifyContent: "center",
  },
});
