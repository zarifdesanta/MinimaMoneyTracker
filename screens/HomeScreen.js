import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Progress from "react-native-progress";
import { setData, getData, clearAllData } from "../helper/SaveLoad";

import ItemCard from "../components/ItemCard";
import AddModal from "../components/AddModal";

const HomeScreen = ({
  navigation,
  route,
  primaryTheme,
  seconderyTheme,
  textTheme,
  maxLimit,
  historyList,
  setHistoryList,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const [dailyList, setDailyList] = useState([]);
  const [dailyTotalCost, setDailyTotalCost] = useState(0);
  const [progress, setProgress] = useState(0);

  var curTotal = dailyTotalCost;

  const calculateTotal = (price) => {
    curTotal = dailyTotalCost;
    curTotal += Number(price);
    setDailyTotalCost(curTotal);
    setData("dailyTotalCost", curTotal);

    calculateProgress();
  };

  const calculateProgress = () => {
    let calcProgress = curTotal / Number(maxLimit);
    // console.log(calcProgress, curTotal, maxLimit);
    setProgress(calcProgress);
  };

  //working on it
  const newDay = () => {
    //bug: even though dailyList is empty,it still going inside this block
    if (dailyList != null) {
      let historyItemObj = {
        date: new Date().toLocaleDateString(),
        total: dailyTotalCost,
      };

      let copyHistoryList = [...historyList];
      copyHistoryList.push(historyItemObj);
      setHistoryList(copyHistoryList);
      setData("historyList", copyHistoryList);

      setDailyList([]);
      setData("dailyList", []);
      setDailyTotalCost(0);
      setData("dailyTotalCost", 0);
      setProgress(0);
    } else {
      console.log("hello");
    }
  };

  const newDayAlertTrigger = () => {
    Alert.alert("New Day", "Current total cost will be added to history", [
      {
        text: "Start",
        onPress: () => newDay(),
        style: "cancel",
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel"),
        style: "cancel",
      },
    ]);
  };

  useEffect(() => {
    calculateProgress();
  }, [maxLimit]);

  useEffect(() => {
    async function getAllData() {
      const dL = await getData("dailyList");
      const dTC = await getData("dailyTotalCost");
      const pD = await getData("prevDate");
      if (dL != null) {
        setDailyList(dL);
      }
      if (dTC != null) {
        setDailyTotalCost(dTC);
        setProgress(dTC / Number(maxLimit));
      }
      if (pD != null) {
        setPrevDate(pD);
      }
    }

    getAllData();
    console.log(dailyList);
    //clearAllData();
    //newDay();
  }, []);

  return (
    <>
      {/**Progress bar */}
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
            onPress={() => newDayAlertTrigger()}
            style={[
              styles.fab,
              {
                backgroundColor: primaryTheme(),
                right: 75,
                width: 50,
                height: 50,
                borderRadius: 15,
              },
            ]}
          >
            <View>
              <Icon
                name="archive-plus-outline"
                size={26}
                color={textTheme()}
              ></Icon>
            </View>
          </TouchableOpacity>

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
