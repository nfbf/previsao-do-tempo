import axios from "axios";
import moment from "moment";

export const consultarTempo = async (cidade) => {
  const url = `https://goweather.herokuapp.com/weather/${cidade}`;
  const response = await axios.get(url);   /* Consumindo a api realizando um get. */
  let previsaoDoTempo = { dado: response.data }; /* Objeto com o response da requisição.  */

  /** Manipulação no atributo day, pois na api o valor refere-se a um número sequencial
   * e não ao número que representa o dia. O cálculo resulta na soma do número do dia atual + o número sequencial. */
  previsaoDoTempo.dado.forecast.map((element) => {
    element.day = Number(element.day) + moment().weekday();
  });

  return previsaoDoTempo;
};
