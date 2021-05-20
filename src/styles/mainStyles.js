import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#252627",
    alignItems: "center",
    justifyContent: "center",
  },

  linGr: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    fontSize: 35,
    color: "white",
    marginBottom: 80,
  },

  textBtn: {
    fontSize: 25,
    color: "white",
  },

  button: {
    width: 180,
    height: 80,
    backgroundColor: "black",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 1,
    elevation: 13,
  },
});

export { mainStyles };
