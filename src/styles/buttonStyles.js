import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
  btn: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 15,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  btnPressed: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 15,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    backgroundColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },

  txt: {
    fontSize: 50,
    color: "rgba(255,255,255,1)",
  },

  txtP: {
    fontSize: 50,
    color: "rgba(255,255,255,0.2)",
  },
});

export { buttonStyles };
