import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import CardPrevisaoDoTempo from "../CardPrevisaoDoTempo/CardPrevisaoDoTempo";

const CardPrevisaoDoTempoScrollView = ({days, iconName}) => {
  
return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }} horizontal={true}>
        {[...days].splice(0, days.length).map((data, i) => (
          <CardPrevisaoDoTempo key={i} data={data} iconName={iconName} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default CardPrevisaoDoTempoScrollView;
