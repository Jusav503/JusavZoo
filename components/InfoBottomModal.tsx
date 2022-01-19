import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const InfoBottomModal = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setIsOpen(true);
  }, []);

  return (
    <GestureHandlerRootView>
        <View style={{ backgroundColor: isOpen ? "#00000090" : "white" }}>
          <TouchableOpacity onPress={handlePresentModalPress}>
            <Text>ejemplo</Text>
          </TouchableOpacity>
        
          <BottomSheetModalProvider>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onDismiss={() => setIsOpen(false)}
            >
              <View style={styles.contentContainer}>
                <Text>ejemplo</Text>
              </View>
            </BottomSheetModal>
          </BottomSheetModalProvider>
        </View>
    </GestureHandlerRootView>
  );
};

export default InfoBottomModal;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
