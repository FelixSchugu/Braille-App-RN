import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { BoxShadow } from "react-native-shadow";

function TextToBraille() {
  const [text, setText] = useState("");

  const convert = (t) => {
    setText(t);
  };

  return (
    <LinearGradient
      colors={["#252627", "#334446", "#3A5356", "#416165"]}
      style={screenStyles.rootScreen}
    >
      {/* <Text style={screenStyles.txt}>Texto a braille</Text> */}
      <Text style={screenStyles.txt}>Texto:</Text>
      <BoxShadow setting={shadowInp(150)}>
        <TextInput
          autoCapitalize="sentences"
          textAlignVertical="top"
          style={screenStyles.input}
          multiline={true}
          numberOfLines={4}
          onChangeText={(t) => convert(t)}
          value={text}
        ></TextInput>
      </BoxShadow>

      <Text style={screenStyles.txt}>Braille:</Text>

      <ScrollView style={screenStyles.scrollViewT}>
        <View style={screenStyles.viewT}>
          {text.split("").map((i,k) => (
            <BrailleChar char={i} key={"h" + k} />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const BrailleChar = ({ char }) => {
  const numbers = ["1", "2", "3", "4", "5", "6"];
  const [accText, setAccText] = useState("");

  useEffect(() => {
    setAccText(getAccesibleText(char));
  });

  if (char === " ") {
    return (
      <View
        style={screenStyles.emptySpace}
        accessible={true}
        accessibilityLabel="Espacio vacio"
      />
    );
  }

  return (
    <View
      style={screenStyles.element}
      accessible={true}
      accessibilityLabel={accText}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{char}</Text>
      <View style={screenStyles.square}>
        {/[a-zA-Z]/.test(char) && char === char.toUpperCase() ? (
          <View style={screenStyles.numerator}>
            {numbers.map((i) => (
              <View
                key={i + "u"}
                style={
                  brailleNums("mayus").indexOf(i) === -1
                    ? screenStyles.circleUnfill
                    : screenStyles.cicleFill
                }
              />
            ))}
          </View>
        ) : /[0-9]/.test(char) ? (
          <View style={screenStyles.numerator}>
            {numbers.map((i) => (
              <View
                key={i + "n"}
                style={
                  brailleNums("number").indexOf(i) === -1
                    ? screenStyles.circleUnfill
                    : screenStyles.cicleFill
                }
              />
            ))}
          </View>
        ) : (
          <View />
        )}

        <View style={screenStyles.numerator}>
          {numbers.map((i) => (
            <View
              key={i}
              style={
                brailleNums(char).indexOf(i) === -1
                  ? screenStyles.circleUnfill
                  : screenStyles.cicleFill
              }
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const brailleNums = (c) => {
  switch (c.toLowerCase()) {
    case "a":
      return ["1"];
    case "b":
      return ["1", "2"];
    case "c":
      return ["1", "4"];
    case "d":
      return ["1", "4", "5"];
    case "e":
      return ["1", "5"];
    case "f":
      return ["1", "2", "4"];
    case "g":
      return ["1", "2", "4", "5"];
    case "h":
      return ["1", "2", "5"];
    case "i":
      return ["2", "4"];
    case "j":
      return ["2", "4", "5"];
    case "k":
      return ["1", "3"];
    case "l":
      return ["1", "2", "3"];
    case "m":
      return ["1", "3", "4"];
    case "n":
      return ["1", "3", "4", "5"];
    case "ñ":
      return ["1", "2", "4", "5", "6"];
    case "o":
      return ["1", "3", "5"];
    case "p":
      return ["1", "2", "3", "4"];
    case "q":
      return ["1", "2", "3", "4", "5"];
    case "r":
      return ["1", "2", "3", "5"];
    case "s":
      return ["2", "3", "4"];
    case "t":
      return ["2", "3", "4", "5"];
    case "u":
      return ["1", "3", "6"];
    case "v":
      return ["1", "2", "3", "6"];
    case "w":
      return ["2", "4", "5", "6"];
    case "x":
      return ["1", "3", "4", "6"];
    case "y":
      return ["1", "3", "4", "5", "6"];
    case "z":
      return ["1", "3", "5", "6"];

    case "á":
      return ["1", "2", "3", "5", "6"];

    case "é":
      return ["2", "3", "4", "6"];

    case "í":
      return ["3", "4"];

    case "ó":
      return ["3", "4", "6"];

    case "ú":
      ["2", "3", "4", "5", "6"];

    case "1":
      return ["1"];

    case "2":
      return ["1", "2"];

    case "3":
      return ["1", "4"];

    case "4":
      return ["1", "4", "5"];

    case "5":
      return ["1", "5"];

    case "6":
      return ["1", "2", "4"];

    case "7":
      return ["1", "2", "4", "5"];

    case "8":
      return ["1", "2", "5"];

    case "9":
      return ["2", "4"];

    case "0":
      return ["2", "4", "5"];

    case ".":
      return ["3"];

    case "-":
      return ["3", "6"];

    case ",":
      return ["2"];

    case ";":
      return ["2", "3"];

    case ":":
      return ["2", "5"];

    case "¿":
      return ["2", "6"];

    case "?":
      return ["2", "6"];

    case "¡":
      return ["2", "3", "5"];

    case "!":
      return ["2", "3", "5"];

    case "(":
      return ["1", "2", "6"];

    case ")":
      return ["3", "4", "5"];

    case '"':
      return ["2", "3", "6"];

    case "mayus":
      return ["4", "6"];

    case "number":
      return ["3", "4", "5", "6"];

    default:
      return [];
  }
};

const getAccesibleText = (c) => {
  const textual = {
    "(": "Paréntesis abierto.",
    ")": "Paréntesis cerrado.",
    ".": "Punto.",
    ",": "Coma.",
    ":": "Dos puntos.",
    ";": "Punto y coma.",
    "-": "Guión.",
    "¿": "Signo de interrogación abierto",
    "?": "Signo de interrogación cerrado.",
    "¡": "Signo de exclamación abierto.",
    "!": "Signo de exclamación cerrado.",
    '"': "Comillas dobles",
  };

  switch (true) {
    case /[A-Z]/.test(c) == true:
      return c + " mayúscula. " + "." + brailleNums(c).join(" ");

    case /[0-9]/.test(c) == true:
      return c + " .signo numerador. " + "." + brailleNums(c).join(" ");

    case /[a-z]/.test(c) == true:
      return c + " ." + brailleNums(c).join(" ");

    case textual[c] === undefined:
      return c;

    default:
      return textual[c] + " ." + brailleNums(c).join(" ");
  }
};

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

const screenStyles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#252627",
    alignItems: "center",
    justifyContent: "center",
  },

  txt: {
    color: "white",
    fontSize: 30,
    borderBottomColor: "white",
    borderBottomWidth: 2,

    marginBottom: 4,
  },
  input: {
    backgroundColor: "rgba(0,0,0,0.3)",
    color: "white",
    alignSelf: "flex-start",
    width: Dimensions.get("window").width - 10,
    height: 150,

    paddingLeft: 5,
    fontSize: 25,

    // elevation: 5,
  },

  element: {
    alignItems: "center",
    justifyContent: "center",
  },

  viewT: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "rgba(0,0,0,0.0)",
    width: 350,
    minHeight: 50,
  },

  scrollViewT: {
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderColor: "rgb(0,0,0)",
    borderWidth: 1,
    width: Dimensions.get("window").width - 10,

    elevation: 5,
  },

  numerator: {
    width: 30,
    height: 45,
    flexWrap: "wrap",
    flexDirection: "column",
  },

  square: {
    minWidth: 25,
    height: 50,
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: 4,
  },

  emptySpace: {
    width: 20,
    height: 50,
  },

  circleUnfill: {
    width: 10,
    height: 10,
    borderRadius: 50,
    borderColor: "gray",
    borderWidth: 1,
    margin: 2,
  },

  cicleFill: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "white",
    margin: 2,
  },
});

export default TextToBraille;
