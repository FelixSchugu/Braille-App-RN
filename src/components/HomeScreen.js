import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { mainBackground } from "../resources/resources";
import { LinearGradient } from "expo-linear-gradient";
import { mainStyles } from "../styles/mainStyles";

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={mainBackground} style={mainStyles.mainScreen}>
      <Text style={mainStyles.titleText}>Traductor Braille</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("BrailleToText")}
        style={mainStyles.button}
      >
        <Text style={mainStyles.textBtn}>Braille a texto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("TextToBraille")}
        style={mainStyles.button}
      >
        <Text style={mainStyles.textBtn}>Texto a Braille</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={mainStyles.button}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={mainStyles.textBtn}>Acerca de...</Text>
      </TouchableOpacity>

      <Text style={{ color: "white" }}> Alpha 0.1 </Text>
      <StatusBar
        backgroundColor="gray"
        barStyle="light-content"
        hidden={true}
      />
    </LinearGradient>
  );
};

export default HomeScreen;
