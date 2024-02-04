import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const AddModal = ({
  primaryTheme,
  seconderyTheme,
  textTheme,
  modalVisible,
  hideModal,
  dailyList,
  setDailyList,
}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const addItem = () => {
    if (name != "" && price != 0) {
      const itemObj = {
        name: name,
        price: price,
      };
      let copyDailyList = [...dailyList];
      copyDailyList.push(itemObj);
      setDailyList(copyDailyList);
      setName("");
      setPrice(0);
      hideModal();
    } else {
      hideModal();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        hideModal();
      }}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, { backgroundColor: seconderyTheme() }]}>
          <TextInput
            onChangeText={(text) => setName(text)}
            placeholder="Name"
            style={[
              styles.modalInput,
              { backgroundColor: primaryTheme(), color: textTheme() },
            ]}
          ></TextInput>
          <TextInput
            onChangeText={(text) => setPrice(text)}
            placeholder="Price"
            keyboardType="numeric"
            style={[
              styles.modalInput,
              { backgroundColor: primaryTheme(), color: textTheme() },
            ]}
          ></TextInput>
          <TouchableOpacity
            onPress={() => addItem()}
            style={[styles.modalButton, { backgroundColor: primaryTheme() }]}
          >
            <Text style={[styles.text, { color: textTheme() }]}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddModal;

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
  modalInput: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    width: "95%",
    height: 50,
    padding: 15,
    fontSize: 16,
    margin: 10,
  },
  modalButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 5,
    width: 100,
    height: 40,
  },
});
