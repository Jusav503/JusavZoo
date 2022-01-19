import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { max } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailsScreen = () => {
  const [animal, setAnimal] = useState("");
  const route = useRoute();

  const fetchAnimalDetails = () => {
    const r = route.params?.details;
    setAnimal(r);
  };
  useEffect(() => {
    fetchAnimalDetails();
  }, []);
  
  const { 
    active_time,
    animal_type,
    diet,
    geo_range,
    habitat, 
    image_link,
    latin_name,
    length_max,
    length_min,
    lifespan, 
    name, 
    weight_max,
    weight_min,
  } = animal

  return (
    <View>
      <Text style={{color:"white"}}>{name}</Text>
    </View>
  );
};

export default DetailsScreen;
