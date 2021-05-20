import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { textToBrailleStyles as styles } from "../styles/textToBrailleStyles";
import { brailleNumeral } from "../traslators/text-to-braille/brailleNumeral";
import { getAccesibleText } from "../accesibility/getAccesibleText";

const BrailleCharGenerator = ({ char }) => {
  const numbers = ["1", "2", "3", "4", "5", "6"];
  const [accText, setAccText] = useState("");

  useEffect(() => {
    setAccText(getAccesibleText(char));
  });

  if (char === " " || char === "\n") {
    return (
      <View
        style={styles.emptySpace}
        accessible={true}
        accessibilityLabel="Espacio vacio"
      />
    );
  }

  return (
    <View style={styles.element} accessible={true} accessibilityLabel={accText}>
      <Text style={{ color: "white", fontSize: 20 }}>{char}</Text>
      <View style={styles.square}>
        {/[a-zA-Z]/.test(char) && char === char.toUpperCase() ? (
          <View style={styles.numerator}>
            {numbers.map((i) => (
              <View
                key={i + "u"}
                style={
                  brailleNumeral("mayus").indexOf(i) === -1
                    ? styles.circleUnfill
                    : styles.cicleFill
                }
              />
            ))}
          </View>
        ) : /[0-9]/.test(char) ? (
          <View style={styles.numerator}>
            {numbers.map((i) => (
              <View
                key={i + "n"}
                style={
                  brailleNumeral("number").indexOf(i) === -1
                    ? styles.circleUnfill
                    : styles.cicleFill
                }
              />
            ))}
          </View>
        ) : (
          <View />
        )}

        <View style={styles.numerator}>
          {numbers.map((i) => (
            <View
              key={i}
              style={
                brailleNumeral(char).indexOf(i) === -1
                  ? styles.circleUnfill
                  : styles.cicleFill
              }
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default BrailleCharGenerator;
