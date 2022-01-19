import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

const Indicator = () => {
  return <ActivityIndicator size="large" color="white" style={atoms.loading} />;
};

const atoms = StyleSheet.create({
  loading: { flex: 1, alignItems: "center", justifyContent: "center" },
  WT: { color: "white" },
  imgMedium: { width: "100%", height: 500 },
});

export { atoms, Indicator };
