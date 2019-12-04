import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import PedrasImages from "./PedrasImages";

export default function PedrasItem({ item }) {
  const [pedra, setPedra] = useState(item);
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setPedra({
          ...pedra,
          selected: !pedra.selected
        });
      }}
    >
      <View style={[styles.itemView, { backgroundColor: pedra.bgColor }]}>
        <PedrasImages name={pedra.name} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    flexGrow: 1,
    flexBasis: 1
  },
  itemView: {
    paddingBottom: 16
  }
});
