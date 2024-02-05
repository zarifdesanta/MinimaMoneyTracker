import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DeleteModal from "./DeleteModal";

const ItemCard = ({
  id,
  primaryTheme,
  seconderyTheme,
  textTheme,
  name,
  price,
  dailyList,
  setDailyList,
  calculateTotal,
}) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const showDeleteModal = () => setDeleteModalVisible(true);
  const hideDeleteModal = () => setDeleteModalVisible(false);
  return (
    <>
      <DeleteModal
        id={id}
        primaryTheme={primaryTheme}
        seconderyTheme={seconderyTheme}
        textTheme={textTheme}
        deleteModalVisible={deleteModalVisible}
        hideDeleteModal={hideDeleteModal}
        dailyList={dailyList}
        setDailyList={setDailyList}
        calculateTotal={calculateTotal}
      ></DeleteModal>

      <TouchableOpacity
        onLongPress={() => showDeleteModal()}
        style={[styles.card, { backgroundColor: primaryTheme() }]}
      >
        <Text style={[styles.text, { color: textTheme() }]}>{name}</Text>
        <Text style={[styles.text, { color: textTheme() }]}>
          {price}
          <Icon name="currency-bdt" size={15} color={textTheme()}></Icon>
        </Text>
      </TouchableOpacity>
    </>
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
