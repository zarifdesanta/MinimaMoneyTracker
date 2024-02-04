import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ItemCard = ({ primaryTheme, textTheme, name, price }) => {
  return (
    <TouchableOpacity
      onLongPress={() => console.log("card > delete modal")}
      style={[styles.card, { backgroundColor: primaryTheme() }]}
    >
      <Text style={[styles.text, { color: textTheme() }]}>{name}</Text>
      <Text style={[styles.text, { color: textTheme() }]}>
        {price}
        <Icon name="currency-bdt" size={15} color={textTheme()}></Icon>
      </Text>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
  },
});
