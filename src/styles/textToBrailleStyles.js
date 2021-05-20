import { StyleSheet, Dimensions } from "react-native";

const textToBrailleStyles = StyleSheet.create({
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

export { textToBrailleStyles };
