import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {nomeDodiaDaSemana} from '../../../util/CardPrevisaoDoTempoUtil';

const CardPrevisaoDoTempo = ({data, iconName}) => {
  let temperatura = data.temperature.replace('+','').substring(0,2);
  temperatura = Number(temperatura)? temperatura.concat(' °C') : 'N/D' ;
  const nomeDiaDaSemana = nomeDodiaDaSemana(data.day);

    return (
      <View>
        <View style={styles.container}>
        <Text style={{ fontWeight: "bold", color: '#fff' }}>{nomeDiaDaSemana}</Text> 
        <MaterialCommunityIcons size={48} name={iconName} color={"#fff"} />
        <Text style={{ fontSize: 17, fontWeight: "bold", color: '#fff' }}>{temperatura} </Text>
      </View> 
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 180,
        width: 130,
        padding: 20,
        margin: 10,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: '#FFFFFF20'
      
      },
})

export default CardPrevisaoDoTempo;