import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { primaryTheme, seconderyTheme, textTheme } from "./helper/ColorPalette";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isDark, setIsDark] = useState(false);

  function myPrimaryTheme() {
    return primaryTheme(isDark);
  }
  function mySeconderyTheme() {
    return seconderyTheme(isDark);
  }
  function myTextTheme() {
    return textTheme(isDark);
  }

  const changeIconThemeButton = () => {
    if (isDark) {
      return "weather-sunny";
    } else {
      return "weather-night";
    }
  };

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"}></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackVisible: false,
            headerShown: true,
            headerTitleStyle: { color: myTextTheme() },
            headerStyle: { backgroundColor: myPrimaryTheme() },
            headerTransparent: false,
            headerRight: () => (
              <TouchableOpacity onPress={() => changeTheme()}>
                <Icon
                  name={changeIconThemeButton()}
                  size={22}
                  color={myTextTheme()}
                ></Icon>
              </TouchableOpacity>
            ),
          }}
        >
          <Stack.Screen name="Home">
            {() => (
              <HomeScreen
                primaryTheme={myPrimaryTheme}
                seconderyTheme={mySeconderyTheme}
                textTheme={myTextTheme}
              ></HomeScreen>
            )}
          </Stack.Screen>
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
