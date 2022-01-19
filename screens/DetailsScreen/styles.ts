import { Dimensions, StyleSheet } from "react-native";

const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default styles;
