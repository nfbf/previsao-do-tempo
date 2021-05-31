export const textDescricao = (descricao) => {
  if (descricao === 'Partly cloudy') return "ParcialmenteNublado";
  else if (descricao === 'Sunny') return "Ensolarado";
  else if (descricao === 'Light rain, mist') return "ChuvaFracaNeblina";
  else if (descricao === 'Patchy rain possible') return "PossibilidadeDeChuvaFragmentada";
  else if (descricao === 'Light rain shower') return "ChuvaFraca";
  else if (descricao === 'Light rain with thunderstorm') return "ChuvaFracaComTrovoada";
  else if (descricao === 'Clear') return 'Claro';
  else return 'NaoDefinido';
};

export const previsaoStyle = {

  ParcialmenteNublado: {
    color: "#67A4C2",
    titulo: "Parcialmente nublado",
    icon: "weather-cloudy",
  },

  Ensolarado: {
    color: "#f7b733",
    titulo: "Ensolarado",
    icon: "weather-sunny",
  },

  ChuvaFracaNeblina: {
    color: "#8D9BA9",
    titulo: "Chuva fraca com neblina",
    icon: "weather-hail",
  },

  PossibilidadeDeChuvaFragmentada: {
    color: "#8BABC8",
    titulo: "Possibilidade de chuva fragmentada",
    icon: "weather-hail",
  },

  ChuvaFraca: {
    color: "#296EAF",
    titulo: "Chuva fraca",
    icon: "weather-rainy",
  },

  ChuvaFracaComTrovoada: {
    color: "#13314D",
    titulo: "Chuva com trovoada",
    icon: "weather-lightning",
  },

  Claro: {
    color: "#63C1DF",
    titulo: "Céu claro",
    icon: "weather-cloudy",
  },

  NaoDefinido:{
    color: "#8CA641",
    titulo: "Não definido",
    icon: "weather-clear",
  }
};
