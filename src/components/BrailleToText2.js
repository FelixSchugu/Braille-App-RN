import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
  ScrollView,
} from "react-native";
import ButtonsOneToThree from "../button-group/ButtonsOneToThree";
import ButtonsFourToSix from "../button-group/ButtonsFourToSix";
import { brailleNumbers } from "../traslators/braille-to-text/barilleNumbers";
import { brailleAlphabet } from "../traslators/braille-to-text/brailleAlphabet";
import { brailleToTextStyles as styles } from "../styles/brailleToTextStyles";
import { LinearGradient } from "expo-linear-gradient";
import {mainBackground} from "../resources/resources"

const BrailleToText = () => {
  const [invert, setInvert] = useState(false);
  const [show, setShow] = useState("");
  const [btnP, setBtnP] = useState([
    "",
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [mayusPressed, setMayusPressed] = useState(false);
  const [numPressed, setNumPressed] = useState(false);

  let tWord = "";

  const touch = (e) => {
    Vibration.vibrate(100);
    let arr = [...btnP];
    arr[e] = !arr[e];
    setBtnP(arr);
  };

  const clear = () => {
    Vibration.vibrate(100);
    setShow("");
    setBtnP(["", false, false, false, false, false, false]);
  };

  const traslate = () => {
    Vibration.vibrate(100);

    btnP.forEach((elem, idx) => {
      if (elem === true) {
        tWord += String(idx);
      }
    });

    if (tWord === "3456" || tWord === "46") {
      tWord === "3456" ? setNumPressed(true) : setMayusPressed(true);

      setBtnP(["", false, false, false, false, false, false]);
      tWord = "";
      return;
    }

    let newChar = mayusPressed
      ? brailleAlphabet(tWord).toUpperCase()
      : numPressed && /[a-j]/.test(brailleAlphabet(tWord))
      ? brailleNumbers(brailleAlphabet(tWord))
      : brailleAlphabet(tWord);
    setShow(show + newChar);
    setBtnP(["", false, false, false, false, false, false]);

    if (mayusPressed) setMayusPressed(false);
    if (numPressed) setNumPressed(false);
    tWord = "";
  };

  const deleteLast = () => {
    Vibration.vibrate(100);
    if (show.length > 0) {
      let l = show.length;
      let c = show.slice(0, l - 1);
      setShow(c);
      setBtnP(["", false, false, false, false, false, false]);
    }
  };

  const change = () => {
    Vibration.vibrate(100);
    setInvert(!invert);
  };

  return (
    <LinearGradient
      colors={mainBackground}
      style={styles.container}
    >
      <Text></Text>

      <View style={styles.resultView}>
        <ScrollView>
          <Text style={styles.resultTxt}>{show}</Text>
        </ScrollView>
      </View>

      <View style={styles.viewCtrls}>
        <TouchableOpacity
          onPress={(e) => {
            Vibration.vibrate(100);
            let l = show.length - 1;
            if (show[l] !== " ") {
              setShow(show + " ");
            }
          }}
          style={styles.btnCtrlsS}
        >
          <Text style={styles.txtCtrls}>Espacio</Text>
        </TouchableOpacity>

        <TouchableOpacity onPressIn={() => traslate()} style={styles.btnCtrlsC}>
          <Text style={styles.txtCtrls}>=</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={deleteLast}
          onLongPress={() => clear()}
          style={styles.btnCtrlsB}
        >
          <Text style={styles.txtCtrls}>Borrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCtrls} onPress={() => change()}>
          <Text style={styles.txtCtrls}>
            {invert ? "Lectura" : "Escritura"}
          </Text>
        </TouchableOpacity>
      </View>

      {!invert ? (
        <View style={styles.viewNum}>
          <ButtonsOneToThree btnP={btnP} touch={touch} />
          <ButtonsFourToSix btnP={btnP} touch={touch} />
        </View>
      ) : (
        <View style={styles.viewNum}>
          <ButtonsFourToSix btnP={btnP} touch={touch} />
          <ButtonsOneToThree btnP={btnP} touch={touch} />
        </View>
      )}
      <StatusBar
        backgroundColor="gray"
        barStyle="light-content"
        hidden={true}
      />
    </LinearGradient>
  );
};

export default BrailleToText;
