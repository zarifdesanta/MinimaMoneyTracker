import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";

const NewDayModal = ({
  primaryTheme,
  seconderyTheme,
  textTheme,
  newDayModalVisible,
  hideNewDayModal,
  newDay,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={newDayModalVisible}
      onRequestClose={() => {
        hideModal();
      }}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, { backgroundColor: seconderyTheme() }]}>
          <Text style={[styles.text, { color: textTheme() }]}>
            Current total cost will be added to history
          </Text>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <TouchableOpacity
              onPress={() => newDay()}
              style={[styles.modalButton, { backgroundColor: primaryTheme() }]}
            >
              <Text style={[styles.text, { color: textTheme() }]}>
                Start Day
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => hideNewDayModal()}
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

export default NewDayModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  text: {
    fontSize: 15,
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
