import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { Button, Input } from "react-native-elements";
//import teste from "./assets/teste3.png";
//import * as Font from "expo-font";
//import AppLoading from "expo-app-loading";
import { consultarTempo } from "./../../services/previsaoService";
//import { validarString } from "./validations/validarString";

/*const fetchFont = () => {
  return Font.loadAsync({
    "KoHo-Light": require("./assets/fonts/KoHo-Light.ttf"),
  });
};*/

const Home = ({ navigation }) => {
  //const [fontLoaded, setFontLoaded] = useState(false);
  const [cidade, setCidade] = React.useState('');

  const validarCidade = async () => {
    navigation.navigate("PrevisaoDoTempo", await consultarTempo(cidade));
  };

  /*  if (!fontLoaded) {
    return (
      <AppLoading
        onError={() => console.log("ERRO")}
        startAsync={fetchFont}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }*/

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>Previsão do tempo</Text>
        <Text style={styles.subtitulo}>Digite o nome da cidade:</Text>
        <Input
          onChangeText={(texto) => setCidade(texto)}
          placeholder="Cidade"
        />
        <Button
          buttonStyle={styles.consultar}
          onPress={() => {
            validarCidade(cidade);
          }}
          title="Consultar"
        ></Button>
        <Button buttonStyle={styles.consultar} title="Sair"></Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 420,
    height: 180,
  },
  titulo: {
    fontSize: 36,
    textAlign: "right",
    padding: 40,
    color: "#fff",
    paddingTop: 90,
  },
  subtitulo: {
    paddingTop: 240,
    textAlign: "left",
    padding: 10,
    fontSize: 18,
    color: "#474444",
  },
  consultar: {
    backgroundColor: "#03989E",
    padding: 15,
    width: 380,
    marginLeft: 5,
  },
  consultar2: {
    width: 350,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    color: "#03989E",
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 200,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 420,
    height: 480,
  },
});

export default Home;
