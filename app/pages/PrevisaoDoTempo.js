import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CardPrevisaoDoTempoScrollView from "../components/CardPrevisaoDoTempoScrollView/CardPrevisaoDoTempoScrollView";
import { traduzirDescricao, previsaoStyle } from "../../util/PrevisaoDoTempoUtil";
import {Button} from "react-native-elements";
import  moment from 'moment';
import 'moment/locale/pt-br';


const PrevisaoDoTempo = ({navigation, route}) => {
  
  moment.locale('pt-br');
  const dataHora = moment().format('DD/MM/YYYY HH:mm'); /* Data e hora atual. TODO: fazer ficar real time. */
  const nomeDoDia = moment().format('dddd');   /* Retorna o nome do dia da semana. */
  const temperatura = route.params.dado.temperature.replace("+", ""); /* Temperatura sem o sinal de positivo na frente. */
  const descricao = traduzirDescricao(route.params.dado.description); /* Descrição sobre o tempo atual. */
  
  return (
    <View style={[styles.container,{backgroundColor: previsaoStyle[descricao].color}]}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={78} name={previsaoStyle[descricao].icon} color={"#fff"} />
        <Text style={styles.tempText}>{temperatura}</Text>
        <Text style={styles.subtituloVento}>Velocidade do vento: {route.params.dado.wind} </Text>
      </View>
      
      <View style={styles.bodyContainer}>
        <Text style={styles.titulo}>{previsaoStyle[descricao].titulo}</Text>
        <Text style={styles.subtitulo}> {nomeDoDia}, </Text>
        <Text style={styles.subtitulo}> {dataHora}</Text>
      </View>
      
      <CardPrevisaoDoTempoScrollView days={route.params.dado.forecast} iconName ={previsaoStyle[descricao].icon}/>

      <Button type="outline" titleStyle={{ color: "#fff" }} 
              buttonStyle={styles.btVoltar} title="Voltar"  onPress={()=>{navigation.goBack()}} ></Button>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  titulo: {
    fontSize: 31,
    color: "#fff",
  },
  subtitulo: {
    fontSize: 20,
    color: "#fff",
  },

  subtituloVento: {
    fontSize: 18,
    color: "#fff",
  },

  btVoltar: {
   margin:5,
   marginLeft:12,
    width: 350,
    color: "#fff",
    borderColor: "#fff",
  },
});

export default PrevisaoDoTempo;
