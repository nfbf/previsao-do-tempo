import axios from "axios";
import  moment from 'moment';

export const consultarTempo = async (cidade) => {
  const url = `https://goweather.herokuapp.com/weather/${cidade}`;
  const response = await axios.get(url);
  let previsaoDoTempo= { dado: response.data};

  previsaoDoTempo.dado.forecast.map(element => {
    element.day = Number(element.day) + moment().weekday();
  });

  return previsaoDoTempo ;
};
