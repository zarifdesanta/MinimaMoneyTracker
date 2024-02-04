import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";

import ItemCard from "../components/ItemCard";
import { cardList } from "../helper/CardList";
import AddModal from "../components/AddModal";

const HomeScreen = ({
  navigation,
  primaryTheme,
  seconderyTheme,
  textTheme,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const [dailyList, setDailyList] = useState([]);
  const [dailyTotalCost, setDailyTotalCost] = useState(0);

  const calculateTotal = (price) => {
    let curTotal = dailyTotalCost;
    curTotal += Number(price);
    setDailyTotalCost(curTotal);
  };

  return (
    <>
      {/**Total */}
      <View style={[styles.total, { backgroundColor: primaryTheme() }]}>
        <Text style={[styles.text, { color: textTheme() }]}>Total</Text>
        <Text style={[styles.text, { color: textTheme() }]}>
          {dailyTotalCost}
          <Icon name="currency-bdt" size={15} color={textTheme()}></Icon>
        </Text>
      </View>

      {/**Main Container */}
      <View style={[styles.container, { backgroundColor: primaryTheme() }]}>
        {/**Sub Container for rounded body */}
        <View
          style={[styles.subContainer, { backgroundColor: seconderyTheme() }]}
        >
          {/**Card View */}
          <ScrollView style={{ padding: 15 }}>
            {dailyList.map((item, id) => {
              return (
                //Card
                <ItemCard
                  key={id}
                  name={item.name}
                  price={item.price}
                  primaryTheme={primaryTheme}
                  textTheme={textTheme}
                ></ItemCard>
              );
            })}
          </ScrollView>

          {/**Add Modal */}
          <AddModal
            primaryTheme={primaryTheme}
            seconderyTheme={seconderyTheme}
            textTheme={textTheme}
            modalVisible={modalVisible}
            hideModal={hideModal}
            dailyList={dailyList}
            setDailyList={setDailyList}
            calculateTotal={calculateTotal}
          ></AddModal>

          {/**FAB */}
          <TouchableOpacity
            onPress={() => showModal()}
            style={[styles.fab, { backgroundColor: primaryTheme() }]}
          >
            <View>
              <Icon name="plus" size={36} color={textTheme()}></Icon>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  subContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 0,
  },
  text: {
    fontSize: 15,
  },
  fab: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 5,
    margin: 15,
  },

  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
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
