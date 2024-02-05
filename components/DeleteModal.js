import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React from "react";

const DeleteModal = ({
  id,
  primaryTheme,
  seconderyTheme,
  textTheme,
  deleteModalVisible,
  hideDeleteModal,
  dailyList,
  setDailyList,
  calculateTotal,
}) => {
  const deleteItem = () => {
    let copyDailyList = [...dailyList];
    calculateTotal(Number(-copyDailyList[id].price));
    copyDailyList.splice(id, 1);
    setDailyList(copyDailyList);
    hideDeleteModal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={deleteModalVisible}
      onRequestClose={() => {
        hideDeleteModal();
      }}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, { backgroundColor: seconderyTheme() }]}>
          <Text style={[styles.text, { color: textTheme() }]}>
            Do you want to delete this item?
          </Text>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <TouchableOpacity
              onPress={() => deleteItem()}
              style={[styles.modalButton, { backgroundColor: primaryTheme() }]}
            >
              <Text style={[styles.text, { color: textTheme() }]}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => hideDeleteModal()}
              style={[styles.modalButton, { backgroundColor: primaryTheme() }]}
            >
              <Text style={[styles.text, { color: textTheme() }]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  text: {
    fontSize: 15,
    margin: 10,
  },
  modalView: {
    margin: 15,
    borderRadius: 20,
    padding: 15,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    elevation: 5,
  },
  modalButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 5,
    width: 100,
    height: 50,
  },
});
