import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { buttonStyles } from "../styles/buttonStyles";

const btn2 = ["4", "5", "6"];

const ButtonsFourToSix = (props) => (
  <View>
    {btn2.map((i) => (
      <TouchableOpacity
        key={i}
        style={!props.btnP[i] ? buttonStyles.btn : buttonStyles.btnPressed}
        onPressIn={() => props.touch(i)}
      >
        <Text
          style={!props.btnP[i] ? buttonStyles.txt : buttonStyles.txtP}
          key={i}
        >
          {i}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);
export default ButtonsFourToSix;
