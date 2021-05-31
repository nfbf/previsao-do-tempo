import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import CardPrevisaoDoTempo from "../CardPrevisaoDoTempo/CardPrevisaoDoTempo";

const CardPrevisaoDoTempoScrollView = ({ days }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }} horizontal={true}>
        {[...days].map((data, i) => (
          <CardPrevisaoDoTempo  key={i} data={data}  />
        ))}
      </ScrollView>
    </View>
  );
};

export default CardPrevisaoDoTempoScrollView;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
