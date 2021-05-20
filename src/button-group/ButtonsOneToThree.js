import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { buttonStyles } from "../styles/buttonStyles";

const btn1 = ["1", "2", "3"];

const ButtonsOneToThree = (props) => (
  <View>
    {btn1.map((i) => (
      <TouchableOpacity
        activeOpacity={0.2}
        key={i}
        style={!props.btnP[i] ? buttonStyles.btn : buttonStyles.btnPressed}
        onPressIn={() => props.touch(i)}
      >
        <Text
          key={i}
          style={!props.btnP[i] ? buttonStyles.txt : buttonStyles.txtP}
        >
          {i}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default ButtonsOneToThree;
