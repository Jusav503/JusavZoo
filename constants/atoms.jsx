import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

const Indicator = () => {
  return <ActivityIndicator size="large" color="white" style={atoms.loading} />;
};

const atoms = StyleSheet.create({
  loading: { flex: 1, alignItems: "center", justifyContent: "center" },
  button:{
    padding:10, 
    backgroundColor: "grey",
    borderRadius: 5,
    alignSelf: "flex-start",
  }
});

export { atoms, Indicator };
