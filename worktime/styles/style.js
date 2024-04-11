import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {},
  textBanner: {
    fontSize: 36,
    fontWeight: "600",
    textAlign: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginRight: 25,
  },
  accountButton: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  accountCreateButton: {
    backgroundColor: "blue",
    marginTop: 40,
    marginBottom: 10,
  },
  accountCreateButtonText: {
    color: "white",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  accountButtonText: {
    fontSize: 18,
    textDecorationLine: "underline",
    marginBottom: 15,
  },
  burger: {
    // marginLeft: 10,
  },
  burgerText: {
    fontSize: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  account: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "normal",
    marginBottom: 5,
  },

  accountSMS: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "normal",
    marginBottom: 5,
    textDecorationLine: "underline",
  },
  accountPassword: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "normal",
    marginBottom: 15,
    textDecorationLine: "underline",
  },

  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  footer: {
    marginTop: 40,
    marginBottom: 40,
  },
  footerMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    // alignItems: 'center',
  },
  footerSupportList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerSupportTitle: {
    fontWeight: "700",
    marginBottom: 5,
  },
  footerSupportItem: {
    marginBottom: 5,
  },
  enter: {
    marginTop: 50,
    marginBottom: 66,
  },
});
