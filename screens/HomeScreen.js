import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";

import ItemCard from "../components/ItemCard";
import { cardList } from "../helper/CardList";

const HomeScreen = ({
  navigation,
  primaryTheme,
  seconderyTheme,
  textTheme,
}) => {
  return (
    <>
      {/**Total */}
      <View style={[styles.total, { backgroundColor: primaryTheme() }]}>
        <Text style={[styles.text, { color: textTheme() }]}>Total</Text>
        <Text style={[styles.text, { color: textTheme() }]}>
          80<Icon name="currency-bdt" size={15} color={textTheme()}></Icon>
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
            {cardList.map((item, id) => {
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

          {/**FAB */}
          <TouchableOpacity
            onPress={() => console.log("fab > add item")}
            style={[styles.fab, { backgroundColor: primaryTheme() }]}
          >
            <View>
              <Icon name="plus" size={40} color={textTheme()}></Icon>
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
});
