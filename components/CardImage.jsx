import React from "react";
import { TouchableOpacity, StyleSheet, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardImage = ({ animal }) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("Details", {details: animal})} >
      <View style={styles.container}>
        <Image
          source={{ uri: animal.image_link }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardImage;

const styles = StyleSheet.create({
  container:{paddingHorizontal:10, paddingTop:5},
  image:{ width: "100%", height: 280, borderRadius: 5, }
});
