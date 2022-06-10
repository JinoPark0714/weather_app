const axios = require('axios');
const Common = require('../../configs/common');
const URL = require('../../api/openWeather');

class OneCallService {

  constructor() { }

  /**
   * 날씨 정보를 받아 옴.
   * @param {string} uri - 날씨 URL 
   */
  getWeathers = async (uri) => {
    try {
      const response = await axios.get(uri);
      const data = await response.data.hourly;
      return data;
    } catch (error) {
      return new Error("Internal Error");
    }
  }

  /**
   * 시간별 날씨 정보 보기
   * @param {stirng} latitude - 위도
   * @param {string} longitude - 경도
   */
  getWeatherArrayByHour = async (latitude, longitude) => {
    const url = URL.getOneCallPosURL(latitude, longitude);
    const weatherArray = await this.getWeathers(url);
    const responseWeatherArray = await this.#getWeatherArray(weatherArray);
    return responseWeatherArray;

  }

  /**
   * 필요한 날씨 정보만 파싱
   * @param {array} weathers 
   */
  #getWeatherArray = async (weathers) => {
    const common = Common;
    const array = new Array();
    const { length } = weathers;
    for (let i = 0; i < length; i++) {
      if (i === 24)
        break;
      const weather = weathers[i];
      const dateTime = new Date(weather.dt * 1000);
      const { id, description, icon } = weather.weather[0];
      let weatherObject = {};

      // 날짜
      weatherObject.date = common.getDate(dateTime);

      // 온도
      weatherObject.temp = parseInt(weather.temp);

      // 체감온도
      weatherObject.feels_like = parseInt(weather.feels_like);

      // 기상 상태
      weatherObject.description = description;

      // 기상 상태 id
      weatherObject.id = id;

      // 기상 상태 아이콘
      weatherObject.icon = icon;
      array.push(weatherObject);
    }
    return array;
  }

}

module.exports = {
  OneCallService: OneCallService
};
