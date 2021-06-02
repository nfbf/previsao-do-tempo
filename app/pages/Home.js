import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import logo from "../images/sol.png";
import { consultarTempo } from "./../../services/previsaoService";
//import { validarString } from "./validations/validarString";

const Home = ({ navigation }) => {
  let [cidade, setCidade] = React.useState("");
  const validarCidade = async () => {
    navigation.navigate("PrevisaoDoTempo", await consultarTempo(cidade));
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.titulo}>PREVISÃO DO TEMPO</Text>
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.informacao}>Para começar, </Text>
          <Text style={styles.informacao}>digite o nome da sua cidade: </Text>
          <Text>{"\n"}</Text>
          <Input inputContainerStyle={styles.inputContainer} placeholderTextColor="#fff" inputStyle={styles.inputText} 
           onChangeText={(texto) => setCidade(texto.replace(/\s/g, ''))}  placeholder="Cidade" />
        </View>

        <View style={styles.btContainer}>
          <Button type="outline" titleStyle={{ color: "#fff" }} 
                  buttonStyle={styles.btConsultar} onPress={() => {validarCidade(cidade);}}  title="Consultar"></Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2471A3",
  },
  bodyContainer: {
    padding: 10,
    backgroundColor: "#FFFFFF20",
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  inputContainer: {
    borderColor: "#fff",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRadius:5,
    padding:3,
    width: 340,
  },
  btContainer: {
    padding: 10,
    backgroundColor: "#FFFFFF20",
  },
  titulo: {
    fontSize: 24,
    color: "#fff",
  },
  btConsultar: {
    borderColor: "#fff",
    padding: 15,
    width: 345,
    marginLeft: 5,
    color: "#fff",
  },
  informacao: {
    color: "#fff",
    textAlign: "left",
    fontSize: 20,
  },
  inputText: {
    color: '#fff',
    borderColor: "#fff",
    fontSize: 18,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: 150,
  },
});

export default Home;
