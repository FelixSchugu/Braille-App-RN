import { StyleSheet } from "react-native";

const brailleToTextStyles = StyleSheet.create({
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

export { brailleToTextStyles };
