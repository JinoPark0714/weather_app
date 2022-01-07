const axios = require('axios');
const res = require('express/lib/response');
const Common = require('../../configs/common');

module.exports = {

  /**
   * 날씨 정보를 모두 받아온다.
   * @param {*} uri - 날씨 URL 
   */
  getWeathersInfo : async (uri) => {
    try {
      const response = await axios.get(uri);
      const data = await response.data.hourly;
      return data;      
    } catch (error) {
      return null;
    }
  },

  /**
   * 필요한 날씨 정보만 필터링하여 받아온다.
   * @param {Array<object>} weathers 
   */
  getWeatherArray : async (weathers) => {
    const common = Common;
    const array = new Array();
    try {
      await weathers.forEach((weather, index)=>{
        if(index === 24)
          return;
        const dateTime = new Date(weather.dt * 1000);
        const {id, description, icon} = weather.weather[0];
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
      });
      return array;
    } catch (error) {
      return null;
    }
  }, 
}