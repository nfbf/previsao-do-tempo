import axios from "axios";

export const consultarTempo = async (cidade) => {
  const url = `https://goweather.herokuapp.com/weather/${cidade}`;
  const response = await axios.get(url);
  const PrevisaoDoTempo= { dado: response.data};
  return PrevisaoDoTempo ;
};
