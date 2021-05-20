import React, { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { BoxShadow } from "react-native-shadow";
import { mainBackground } from "../resources/resources";
import BrailleCharGenerator from "../braile-char-generator/BrailleCharGenerator";
import { textToBrailleStyles as styles } from "../styles/textToBrailleStyles";

const shadowInp = (h) => ({
  width: Dimensions.get("window").width - 10,
  height: h,
  color: "#000",
  border: 15,
  radius: 1,
  opacity: 0.2,
  x: 0,
  y: 0,
});

function TextToBraille() {
  const [text, setText] = useState("");

  const convert = (t) => {
    setText(t);
  };

  return (
    <LinearGradient colors={mainBackground} style={styles.rootScreen}>
      <Text style={styles.txt}>Texto:</Text>
      <BoxShadow setting={shadowInp(150)}>
        <TextInput
          autoCapitalize="sentences"
          textAlignVertical="top"
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          onChangeText={(t) => convert(t)}
          value={text}
          // blurOnSubmit={true}
        ></TextInput>
      </BoxShadow>

      <Text style={styles.txt}>Braille:</Text>

      <ScrollView style={styles.scrollViewT}>
        <View style={styles.viewT}>
          {text.split("").map((i, k) => (
            <BrailleCharGenerator char={i} key={"h" + k} />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default TextToBraille;
