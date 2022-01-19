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
  const snapPoints = useMemo(() => ["50%", "90%"], []);

  const fetchAnimalDetails = () => {
    const r = route.params?.details;
    setAnimal(r);
  };
  useEffect(() => {
    fetchAnimalDetails();
  }, []);
  const {
    id,
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
      <View
        style={[
          styles.container,
          { backgroundColor: isOpen ? "#00000090" : "black" },
        ]}
      >
        <Image
          source={{ uri: image_link }}
          style={atoms.imgMedium}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={pressOpenModal}>
          <Text style={atoms.WT}>{name}</Text>
        </TouchableOpacity>

        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onDismiss={() => setIsOpen(false)}
          >
            <View style={styles.contentContainer}>
              <Text>{id}</Text>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </GestureHandlerRootView>
  );
};

export default DetailsScreen;
