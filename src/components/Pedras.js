import React, { useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import defaultState from "../config/pedras";
import PedrasItem from "./PedrasItem";

export default function Pedras() {
  const [pedras, _] = useState(defaultState);

  _renderItem = ({ item }) => {
    console.log(item);
    item.bgColor = item.selected ? "#ff0000" : "#fff";
    return <PedrasItem item={item} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={pedras}
        numColumns={4}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
}
