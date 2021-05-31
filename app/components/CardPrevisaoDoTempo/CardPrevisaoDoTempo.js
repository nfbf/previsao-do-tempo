import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from "moment";

const CardPrevisaoDoTempo = ({data}) => {
  moment.locale('pt-br');
 
  const temperature = data.temperature.replace('+','').substring(0,2);
  const day = moment().day(data.day).format("dddd")

    return (
      <View>
        <View style={styles.container}>
        <Text style={{ fontWeight: "bold", color: '#fff' }}>{day}</Text>     
        <Text style={{ fontSize: 17, fontWeight: "bold", color: '#fff' }}>{temperature} °C</Text>
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

export default CardPrevisaoDoTempo