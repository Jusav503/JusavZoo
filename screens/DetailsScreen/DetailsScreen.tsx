import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useRoute } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { atoms, Indicator } from "../../constants/atoms";
import styles from "./styles";

const DetailsScreen = () => {
  const [animal, setAnimal] = useState("");
  const route = useRoute();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = useMemo(() => ["60%", "65%"], []);

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
  } = animal;

  const pressOpenModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setIsOpen(true);
  }, []);

  if (!animal) {
    return <Indicator />;
  }

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <TouchableOpacity onPress={pressOpenModal}>
          <Image
            source={{ uri: image_link }}
            resizeMode="contain"
            style={[styles.imgMedium, { opacity: isOpen ? 0.2 : 1 }]}
          />
        </TouchableOpacity>

        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onDismiss={() => setIsOpen(false)}
          >
            <View style={styles.contentContainer}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
              <Text style={{ color: "grey" }}>({latin_name})</Text>
              <Text>Animal type: {animal_type}</Text>

              <View style={{ marginTop: 6 }}>
                <View style={styles.infoContent}>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/color/48/000000/weight-kg.png",
                    }}
                    style={styles.icon}
                  />
                  <Text style={{fontWeight: "bold"}}>Weight: </Text>
                  <Text>
                    min.{weight_min} | max. {weight_max}
                  </Text>
                </View>

                <View style={styles.infoContent}>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/color/48/000000/length.png",
                    }}
                    style={styles.icon}
                  />
                  <Text style={{fontWeight: "bold"}}>Length(Inch): </Text>
                  <Text numberOfLines={2} >
                    min.{length_min} | max. {length_max}
                  </Text>
                </View>

                <View style={styles.infoContent}>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/color/48/000000/blueberry.png",
                    }}
                    style={styles.icon}
                  />
                  <View style={{flexDirection:"row"}}>
                    <Text style={{fontWeight: "bold"}}>Diet: </Text>
                    <Text>{diet}</Text>
                  </View>
                </View>

                <View style={styles.infoContent}>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/color/48/000000/world-map-continents.png",
                    }}
                    style={styles.icon}
                  />
                  <View style={{flexDirection:"row"}}>
                    <Text style={{fontWeight: "bold"}}>Geo range: </Text>
                    <Text>{geo_range}</Text>
                  </View>
                </View>

                <View style={styles.infoContent}>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/color/48/000000/jungle.png",
                    }}
                    style={styles.icon}
                  />
                  <View style={{flexDirection:"row"}}>
                    <Text style={{fontWeight: "bold"}}>Habitat: </Text>
                    <Text>{habitat}</Text>
                  </View>
                </View>

                <View style={styles.infoContent}>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/color/48/000000/heart-cross.png",
                    }}
                    style={styles.icon}
                  />
                  <View style={{flexDirection:"row"}}>
                    <Text style={{fontWeight: "bold"}}>Lifespan: </Text>
                    <Text>{lifespan} years</Text>
                  </View>
                </View>

                <View style={styles.infoContent}>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/color/48/000000/alarm-clock--v1.png",
                    }}
                    style={styles.icon}
                  />
                  <View style={{flexDirection:"row"}}>
                    <Text style={{fontWeight: "bold"}}>Active time: </Text>
                    <Text>{active_time}</Text>
                  </View>
                </View>
              </View>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </GestureHandlerRootView>
  );
};

export default DetailsScreen;
