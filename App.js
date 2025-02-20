import React, { useState, useEffect } from "react";
import { View, StatusBar, StyleSheet, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Store from "./Screens/Store";
import Bio from "./Screens/Bio";
import Profile from "./Screens/Profile";

const Tabs = createBottomTabNavigator();
const Stacks = createStackNavigator();

function Startupscreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.body}>
      <Image
        source={require("./assets/Main/Gamepad.png")}
        style={styles.image}
      />
      <Text style={styles.text}>GAMERANT</Text>
    </View>
  );
}

function TabNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="Store"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#252525",
          position: "absolute",
          borderTopWidth: 0,
          elevation: 10,
          height: 70,
          bottom: 16,
          marginHorizontal: 16,
          borderRadius: 16,
          alignItems: "center",
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Bio"
        component={Bio}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
                width: 60,
                height: 60,
              }}
            >
              <FontAwesome6 name="cart-flatbed" size={30} color="#B3B3B3" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
                width: 60,
                height: 60,
              }}
            >
              <MaterialIcons name="videogame-asset" size={40} color="#B3B3B3" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
                width: 60,
                height: 60,
              }}
            >
              <FontAwesome name="user-circle" size={30} color="#B3B3B3" />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Startupscreen onFinish={() => setIsLoading(false)} />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        style="auto"
        barStyle={"light-content"}
        backgroundColor={"#121212"}
      />
      <Stacks.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#252525", position: "absolute" },
          headerTintColor: "white",
          headerTitleStyle: { color: "white" },
        }}
      >
        <Stacks.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stacks.Screen name="Profile" component={Profile} />
        <Stacks.Screen name="Bio" component={Bio} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 220,
    width: 220,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    letterSpacing: 4,
    marginTop: 20,
  },
});
