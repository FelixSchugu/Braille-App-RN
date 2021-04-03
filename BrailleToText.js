import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import * as Speech from "expo-speech";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

class BrailleToText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      invert: false,
      show: "",
      btnP: ["", false, false, false, false, false, false],
      styleP: styles.btn,
    };

    this.tWord = "";
    this.mayusPressed = false;
    this.numPressed = false;
    this.touch = this.touch.bind(this);
    this.clear = this.clear.bind(this);
    this.traslate = this.traslate.bind(this);
    this.deleteLast = this.deleteLast.bind(this);
    this.change = this.change.bind(this);
  }

  touch = (e) => {
    Vibration.vibrate(100);
    let arr = this.state.btnP;
    arr[e] = !arr[e];
    this.setState({
      btnP: arr,
    });
  };

  clear = () => {
    Vibration.vibrate(100);
    this.setState({
      show: "",
      btnP: ["", false, false, false, false, false, false],
    });
  };

  traslate = () => {
    Vibration.vibrate(100);
    this.state.btnP.forEach((e, i) => {
      if (e === true) {
        this.tWord += String(i);
      }
    });

    if (this.tWord === "3456" || this.tWord === "46") {
      this.tWord === "3456"
        ? (this.numPressed = true)
        : (this.mayusPressed = true);

      this.setState({
        btnP: ["", false, false, false, false, false, false],
      });
      this.tWord = "";
      return;
    }

    this.setState({
      show:
        this.state.show +
        (this.mayusPressed
          ? brailleAlphabet(this.tWord).toUpperCase()
          : this.numPressed && /[a-j]/.test(brailleAlphabet(this.tWord))
          ? brailleNums(brailleAlphabet(this.tWord))
          : brailleAlphabet(this.tWord)),
      btnP: ["", false, false, false, false, false, false],
    });

    if (this.mayusPressed) this.mayusPressed = false;
    if (this.numPressed) this.numPressed = false;

    this.tWord = "";
  };

  deleteLast = () => {
    Vibration.vibrate(100);
    if (this.state.show.length > 0) {
      let l = this.state.show.length;
      let c = this.state.show.slice(0, l - 1);
      this.setState({
        show: c,
        btnP: ["", false, false, false, false, false, false],
      });
    }
  };

  change = () => {
    Vibration.vibrate(100);
    this.setState({
      invert: !this.state.invert,
    });
  };

  render() {
    return (
      <LinearGradient
        colors={["#252627", "#334446", "#3A5356", "#416165"]}
        style={styles.container}
      >
        <Text></Text>

        <View style={styles.resultView}>
          <ScrollView>
            <Text style={styles.resultTxt}>{this.state.show}</Text>
          </ScrollView>
        </View>

        <View style={styles.viewCtrls}>
          <TouchableOpacity
            onPress={(e) => {
              Vibration.vibrate(100);
              let l = this.state.show.length - 1;
              if (this.state.show[l] !== " ") {
                this.setState({
                  show: this.state.show + " ",
                });
              }
            }}
            style={styles.btnCtrlsS}
          >
            <Text style={styles.txtCtrls}>Espacio</Text>
          </TouchableOpacity>

          <TouchableOpacity onPressIn={this.traslate} style={styles.btnCtrlsC}>
            <Text style={styles.txtCtrls}>=</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.deleteLast}
            onLongPress={this.clear}
            style={styles.btnCtrlsB}
          >
            <Text style={styles.txtCtrls}>Borrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnCtrls}
            onPress={() => this.change()}
          >
            <Text style={styles.txtCtrls}>
              {this.state.invert ? "Lectura" : "Escritura"}
            </Text>
          </TouchableOpacity>
        </View>

        {!this.state.invert ? (
          <View style={styles.viewNum}>
            <ButtonsOneToThree
              btnP={this.state.btnP}
              touch={this.touch.bind(this)}
            />
            <ButtonsFourToSix
              btnP={this.state.btnP}
              touch={this.touch.bind(this)}
            />
          </View>
        ) : (
          <View style={styles.viewNum}>
            <ButtonsFourToSix
              btnP={this.state.btnP}
              touch={this.touch.bind(this)}
            />
            <ButtonsOneToThree
              btnP={this.state.btnP}
              touch={this.touch.bind(this)}
            />
          </View>
        )}
        <StatusBar
          backgroundColor="gray"
          barStyle="light-content"
          hidden={true}
        />
      </LinearGradient>
    );
  }
}

const ButtonsOneToThree = (props) => (
  <View>
    {btn1.map((i) => (
      <TouchableOpacity
        activeOpacity={0.2}
        key={i}
        style={!props.btnP[i] ? styles.btn : styles.btnPressed}
        onPressIn={() => props.touch(i)}
      >
        <Text key={i} style={!props.btnP[i] ? styles.txt : styles.txtP}>
          {i}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const ButtonsFourToSix = (props) => (
  <View>
    {btn2.map((i) => (
      <TouchableOpacity
        key={i}
        style={!props.btnP[i] ? styles.btn : styles.btnPressed}
        onPressIn={() => props.touch(i)}
      >
        <Text style={!props.btnP[i] ? styles.txt : styles.txtP} key={i}>
          {i}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const brailleNums = (c) => {
  switch (c) {
    case "a":
      return "1";
    case "b":
      return "2";
    case "c":
      return "3";
    case "d":
      return "4";
    case "e":
      return "5";
    case "f":
      return "6";
    case "g":
      return "7";
    case "h":
      return "8";
    case "i":
      return "9";
    case "j":
      return "0";

    default:
      return "";
  }
};

const brailleAlphabet = (num) => {
  switch (num) {
    case "1":
      return "a";

    case "12":
      return "b";

    case "14":
      return "c";

    case "145":
      return "d";

    case "15":
      return "e";

    case "124":
      return "f";

    case "1245":
      return "g";

    case "125":
      return "h";

    case "24":
      return "i";

    case "245":
      return "j";

    case "13":
      return "k";

    case "123":
      return "l";

    case "134":
      return "m";

    case "1345":
      return "n";

    case "12456":
      return "ñ";

    case "135":
      return "o";

    case "1234":
      return "p";

    case "12345":
      return "q";

    case "1235":
      return "r";

    case "235":
      return "s";

    case "2345":
      return "t";

    case "136":
      return "u";

    case "1236":
      return "v";

    case "2456":
      return "w";

    case "1346":
      return "x";

    case "13456":
      return "y";

    case "1356":
      return "z";

    case "3":
      return ".";
    case "2":
      return ",";
    case "23":
      return ";";
    case "36":
      return "-";
    case "25":
      return ":";
    case "26":
      return "¿?";
    case "235":
      return "¡!";
    case "126":
      return "(";
    case "345":
      return ")";
    case "236":
      return '"';

    default:
      return "";
  }
};

export default BrailleToText;

const btn1 = ["1", "2", "3"];
const btn2 = ["4", "5", "6"];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#252627",
    alignItems: "center",
    justifyContent: "center",
  },

  viewNum: {
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 15,
  },

  btn: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 15,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "rgba(11,57,72,1)",
    alignItems: "center",
    justifyContent: "center",

    // elevation: 10
  },

  btnPressed: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 15,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    backgroundColor: "rgba(11,57,72,0.5)",
    alignItems: "center",
    justifyContent: "center",

    // elevation: 10
  },

  txt: {
    fontSize: 50,
    color: "rgba(255,255,255,1)",
  },

  txtP: {
    fontSize: 50,
    color: "rgba(255,255,255,0.2)",
  },

  viewCtrls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    marginTop: 10,
  },

  btnCtrls: {
    backgroundColor: "#252627",
    width: 110,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 5,
  },

  btnCtrlsS: {
    backgroundColor: "#252627",
    width: 95,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 5,
  },

  btnCtrlsC: {
    backgroundColor: "#252627",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 5,
  },

  btnCtrlsB: {
    backgroundColor: "#252627",
    width: 65,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 5,
  },

  txtCtrls: {
    fontSize: 20,
    color: "white",
  },

  resultView: {
    marginTop: 5,
    height: 150,
    width: 330,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 2,
  },

  resultTxt: {
    fontSize: 25,
    color: "white",
  },

  btnnn2: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 15,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#0B3948",
  },
});
