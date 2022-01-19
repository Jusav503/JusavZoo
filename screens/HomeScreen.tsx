import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View, VirtualizedList } from "react-native";
import { getAnimals } from "../api/APIZoo";
import CardImage from "../components/CardImage";
import atoms from "../constants/atoms";

const HomeScreen = () => {
  const [animals, setAnimals] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchAnimals = async () => {
    const fetchedAnimals = await getAnimals();
    setAnimals(fetchedAnimals);
  };
  useEffect(() => {
    fetchAnimals();
  }, []);

  const getItem = (data, index) => {
    return data[index];
  }
  
  if(!animals || refreshing ){
    return <ActivityIndicator size="large" color="white" style={atoms.loading} />
  }

  // renders
  return (
    <View style={{flex:1}}>
      <VirtualizedList
        data={animals}
        initialNumToRender={4}
        getItem={getItem}
        getItemCount={data => data.length}
        renderItem={({ item }) => <CardImage animal={item} />}
        refreshing={refreshing}
        onRefresh={async()=>{
          setRefreshing(true);
          await fetchAnimals();
          setRefreshing(false)
        }}
      />
    </View>
  );
};

export default HomeScreen;
