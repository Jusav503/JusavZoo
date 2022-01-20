import { Dimensions, StyleSheet } from "react-native";

const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
  },
  imgMedium: { width: "100%", height: 500 },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent:"flex-start"
  },
  icon: {
    width: 25,
    height: 25,
    margin:6
  },
  infoContent:{
    flexDirection:"row",
    alignItems: "center",
    paddingRight:160
  }
});

export default styles;
