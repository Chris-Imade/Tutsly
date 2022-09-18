import { View, Text } from 'react-native'
import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { 
  AccountScreen, 
  ChatScreen, 
  HomeScreen, 
  LibraryScreen, 
  Welcome
} from "../screens/index";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false
        })}
      >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='HomeTab' component={AppTab} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let navIcon;

          if (route.name == "Home") {
            navIcon = focused ? "home" : "home-outline";
            size = focused ? 28 : 24;
          } else if (route.name == "Chat") {
            navIcon = focused ? 'chat' : 'chat-alert-outline';
            size = focused ? 28 : 24;
          } else if (route.name == "Library") {
            navIcon = focused ? 'book' : 'book-outline';
            size = focused ? 28 : 24;
          } else if (route.name == "Account") {
            navIcon = focused ? 'account' : 'account-outline';
            size = focused ? 28 : 24;
          }
          return <Icon name={navIcon} size={size} color={color} />
        },
        "tabBarActiveTintColor": "#772893",
        "tabBarInactiveTintColor": "#ccccccff",
        "tabBarStyle": [{
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "space-around",
            "paddingBottom": 10,
            "height": 60
        }, null],
        "headerShown": false
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}


const AppNav = () => {
  return (
    <AppStack />
  )
}


export default AppNav;