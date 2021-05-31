import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CardPrevisaoDoTempoScrollView from "../components/CardPrevisaoDoTempoScrollView/CardPrevisaoDoTempoScrollView";
import { textDescricao, previsaoStyle } from "../../util/PrevisaoDoTempoUtil";
import  moment from 'moment';
import 'moment/locale/pt-br';


const PrevisaoDoTempo = ({ route }) => {
  moment.locale('pt-br');
  const dataHora = moment().format('DD/MM/YYYY HH:mm');
  const dia = moment().format('dddd');
  const temperatura = route.params.dado.temperature.replace("+", "");
  const descricao = textDescricao(route.params.dado.description);
  
  return (
    <View style={[styles.weatherContainer,{backgroundColor: previsaoStyle[descricao].color},]}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={78} name={previsaoStyle[descricao].icon} color={"#fff"} />
        <Text style={styles.tempText}>{temperatura}</Text>
      </View>
      
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{previsaoStyle[descricao].titulo}</Text>
        <Text style={styles.subtitle}> {dia}, </Text>
        <Text style={styles.subtitle}> {dataHora}</Text>
      </View>
      
      <CardPrevisaoDoTempoScrollView days={route.params.dado.forecast} />
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },
  tempText: {
    fontSize: 48,
    color: "#fff",
  },
  bodyContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 35,
    color: "#fff",
  },
  subtitle: {
    fontSize: 20,
    color: "#fff",
  },
});

export default PrevisaoDoTempo;
