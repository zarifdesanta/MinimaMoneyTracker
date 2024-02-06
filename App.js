import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { useState, useRef } from "react";
import { primaryTheme, seconderyTheme, textTheme } from "./helper/ColorPalette";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();

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

  const changeIconScreenButton = () => {
    if (navigationRef.getCurrentRoute().name == "Home") {
      return "cog-outline";
    } else if (navigationRef.getCurrentRoute().name == "Settings") {
      return "home-outline";
    } else {
      return "cog-outline";
    }
  };

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  // function getCurScreenName() {
  //   return navigationRef.getCurrentRoute().name;
  // }

  // const navigateScreens = (navigation) => {
  //   if (getCurScreenName() == "Home") {
  //     navigation.navigate("Settings");
  //   } else if (getCurScreenName() == "Settings") {
  //     navigation.navigate("Home");
  //   } else {
  //     return;
  //   }
  // };
  const [maxLimit, setMaxLimit] = useState(100);
  //History useState
  const [historyList, setHistoryList] = useState([]);

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"}></StatusBar>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerBackVisible: false,
            headerShown: true,
            headerTitleStyle: { color: myTextTheme() },
            headerStyle: { backgroundColor: myPrimaryTheme() },
            headerTransparent: false,
            headerShadowVisible: false,
            // headerLeft: () => (
            //   <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            //     <Icon name="menu" size={22} color={myTextTheme()}></Icon>
            //   </TouchableOpacity>
            // ),
          })}
        >
          <Stack.Screen
            name="Home"
            options={({ navigation }) => ({
              headerRight: () => (
                <>
                  <TouchableOpacity
                    onPress={() => changeTheme()}
                    style={{ padding: 5 }}
                  >
                    <Icon
                      name={changeIconThemeButton()}
                      size={22}
                      color={myTextTheme()}
                    ></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Settings")}
                    style={{ paddingLeft: 10 }}
                  >
                    <Icon
                      name={"cog-outline"}
                      size={22}
                      color={myTextTheme()}
                    ></Icon>
                  </TouchableOpacity>
                </>
              ),
            })}
          >
            {(props) => (
              <HomeScreen
                {...props}
                primaryTheme={myPrimaryTheme}
                seconderyTheme={mySeconderyTheme}
                textTheme={myTextTheme}
                maxLimit={maxLimit}
              ></HomeScreen>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Settings"
            options={({ navigation }) => ({
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Home")}
                  style={{ paddingRight: 10 }}
                >
                  <Icon
                    name="arrow-left"
                    size={22}
                    color={myTextTheme()}
                  ></Icon>
                </TouchableOpacity>
              ),
            })}
          >
            {(props) => (
              <SettingsScreen
                {...props}
                primaryTheme={myPrimaryTheme}
                seconderyTheme={mySeconderyTheme}
                textTheme={myTextTheme}
                maxLimit={maxLimit}
                setMaxLimit={setMaxLimit}
                changeTheme={changeTheme}
              ></SettingsScreen>
            )}
          </Stack.Screen>
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
