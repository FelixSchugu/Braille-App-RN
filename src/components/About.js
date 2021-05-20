import React from "react";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { mainBackground } from "../resources/resources";
import { mainStyles } from "../styles/mainStyles";

const About = () => {
  return (
    <LinearGradient colors={mainBackground} style={mainStyles.linGr}>
      <Text style={{ fontSize: 20, color: "white", paddingLeft: 20 }}>
        Esta aplicación ha sido desarrollada por Felix Horacio Schugurensky con
        al ayuda de La profesora Patricia Catalano.
      </Text>

      <Text
        style={{
          fontSize: 20,
          color: "white",
          paddingLeft: 20,
          paddingTop: 20,
          alignSelf: "flex-start",
        }}
        dataDetectorType={"email"}
      >
        Horaiochuru@gmail.com
      </Text>
    </LinearGradient>
  );
};

export default About;
