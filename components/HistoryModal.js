import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HistoryModal = ({
  primaryTheme,
  seconderyTheme,
  textTheme,
  historyList,
  historyModalVisible,
  hideHistoryModal,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={historyModalVisible}
      onRequestClose={() => {
        hideHistoryModal();
      }}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, { backgroundColor: seconderyTheme() }]}>
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            {historyList.map((item, id) => {
              return (
                <View
                  key={id}
                  style={{
                    width: "95%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={[styles.text, { color: textTheme() }]}>
                    {item.date}
                  </Text>
                  <Text style={[styles.text, { color: textTheme() }]}>
                    {item.total}
                    <Icon
                      name="currency-bdt"
                      size={15}
                      color={textTheme()}
                    ></Icon>
                  </Text>
                </View>
              );
            })}
          </ScrollView>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <TouchableOpacity
              onPress={() => hideHistoryModal()}
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

export default HistoryModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  text: {
    fontSize: 15,
    margin: 5,
  },
  modalView: {
    margin: 15,
    borderRadius: 20,
    padding: 15,
    width: "90%",
    height: "75%",
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
