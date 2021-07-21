const express = require('express');
const router = express.Router();
const request = require('request');
const openWeather = require('../configs/openWeatherConfig');
const common = require('../configs/common');

/**
 * 24시간 간격의 날씨 정보를 받아온다.
 * 우선 테스트는 부산을 목표로
 */
router.get('/oneCall', (req, res)=>{
  const uri = openWeather.getOneCallPos(35.17944, 129.07556);
  const param = {uri : uri};
  new Promise((resolve, reject)=>{
    request(param,(err, res, body)=>{
      if(err){
        console.log(`URL param error : ${err}`);
        res.render('errorpage');
      }
      const myData = JSON.parse(res.body);
      /**
       * hourly.dt              시각
       * hourly.temp            온도
       * hourly.feels_like      체감온도
       * weather[0].description 기상상태
       */
      const length = myData.hourly.length - 24; // 시간별 48개니까 12개만 받아옴
      console.log(`myData.hourly.length : ${length}`);

      let weatherArr = [];
      for(let i = 0; i < length; i++){
        let result = myData.hourly[i];
        let weather = {};
  
        // new Date(num)의 num은 밀리 초를 나타내기 때문에 1000을 곱하여 초로 변환한다.
        result.dt = new Date((result.dt * 1000));
        weather.date = common.getDate(result.dt);
        weather.temp = parseInt(result.temp);
        weather.feels_like = parseInt(result.feels_like);
        weather.description = result.weather[0].description;
        weather.id = result.weather[0].id;
        weather.icon = result.weather[0].icon;
        // 날씨 정보 출력
        // console.log(`${i+1}번`);
        common.printWeather(weather);
        
        weatherArr.push(weather);
      }
      resolve(weatherArr);
    });
  }).then((weathers)=>{
    res.send(weathers);
  });
});

module.exports = router;