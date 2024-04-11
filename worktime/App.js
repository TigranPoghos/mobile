import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {CheckBox, View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import BannerPage from "./components/Banner";
import RegistrationPage from "./components/RegistrationPage";
import EnterPage from "./components/EnterPage";
import { styles } from "./styles/style";
// import CheckBox from '@react-native-community/checkbox';

export default function App() {


  const Stack = createNativeStackNavigator();
  const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Registration" component={RegistrationPage} options={{headerShown:false}} />
          <Stack.Screen name="Banner" component={BannerPage} />
          <Stack.Screen name="Enter" component={EnterPage} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    
      <MyStack />
    
  );
}
