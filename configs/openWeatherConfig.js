let openWeather = {};

openWeather.key = '935b7bcf1345fd766f3108777f4afe94';
openWeather.name = "weather";
openWeather.city = "Seoul";

// Request URI
openWeather.uri = `api.openweathermap.org/data/2.5/weather?q=${openWeather.city}&appid=${openWeather.key}`;
openWeather.u = `https://api.openweathermap.org/data/2.5/onecall?lat=35.1379222&lon=129.05562775&appid=935b7bcf1345fd766f3108777f4afe94&units=metric&lang=kr`;


openWeather.getCurrentWeather = (cityName)=>{
  return `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeather.key}`
};

/**
 * 위도, 경도를 입력하여 해당 위치의 날씨를 나타낼 URL을 반환한다.
 * @param {Number} lat - 위도
 * @param {Number} lon - 경도
 * @returns {String}
 */
openWeather.getURLOneCallPos = (lat, lon) =>{
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=935b7bcf1345fd766f3108777f4afe94&units=metric&lang=kr`;
};


module.exports = openWeather;