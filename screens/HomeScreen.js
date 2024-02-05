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
import * as Progress from "react-native-progress";
import { cardList } from "../helper/CardList";

import ItemCard from "../components/ItemCard";
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
  const [progress, setProgress] = useState(0);
  const [maxLimit, setMaxLimit] = useState(100);

  const calculateTotal = (price) => {
    let curTotal = dailyTotalCost;
    curTotal += Number(price);
    setDailyTotalCost(curTotal);

    let calcProgress = curTotal / maxLimit;
    console.log(calcProgress, curTotal, maxLimit);
    setProgress(calcProgress);
  };

  return (
    <>
      <View
        style={{
          alignItems: "center",
          backgroundColor: primaryTheme(),
        }}
      >
        <Progress.Bar
          progress={progress}
          width={360}
          height={15}
          borderRadius={20}
          useNativeDriver={true}
          borderColor={"gray"}
          color={textTheme()}
        ></Progress.Bar>
      </View>
      {/**Total */}
      <View style={[styles.total, { backgroundColor: primaryTheme() }]}>
        {/* <TouchableOpacity onPress={() => showDeleteModal()}>
          <Icon name="cog-outline" size={22} color={textTheme()}></Icon>
        </TouchableOpacity> */}

        <Text style={[styles.text, { color: textTheme() }]}>Total</Text>
        <Text style={[styles.text, { color: textTheme(), marginLeft: "auto" }]}>
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
          {/* <View style={{ alignItems: "center", marginTop: 15 }}>
            <Progress.Bar
              progress={progress}
              width={350}
              height={15}
              borderRadius={20}
              useNativeDriver={true}
              borderColor={primaryTheme()}
              color={textTheme()}
            ></Progress.Bar>
          </View> */}
          {/**Card View */}
          <ScrollView style={{ padding: 15 }}>
            {dailyList.map((item, id) => {
              return (
                //Card
                <ItemCard
                  key={id}
                  id={id}
                  name={item.name}
                  price={item.price}
                  primaryTheme={primaryTheme}
                  seconderyTheme={seconderyTheme}
                  textTheme={textTheme}
                  dailyList={dailyList}
                  setDailyList={setDailyList}
                  calculateTotal={calculateTotal}
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
    justifyContent: "",
    padding: 15,
  },
});
