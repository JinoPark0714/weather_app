const express = require('express');
const router = express.Router();
const request = require('request');
const openWeather = require('../configs/openWeatherConfig');
const common = require('../configs/common');


/**
 * 
 */
router.get('/oneCall', (req, res)=>{
  const uri = openWeather.getOneCallPos(35.17944, 129.07556);
  const param = {uri : uri};
  new Promise((resolve, reject)=>{
    request(param,(err, res, body)=>{
      if(err){
        console.log(`URL param error : ${err}`);
        res.prependListener('errorpage')
      }
      const myData = JSON.parse(res.body);
      /**
       * hourly.dt              시각
       * hourly.temp            온도
       * hourly.feels_like      체감온도
       * weather[0].description 기상상태
       */
      console.log(`myData.hourly.length : ${myData.hourly.length}`);
      const length = myData.hourly.length - 36; // 시간별 48개니까 12개만 받아옴
      
      let weatherArr = new Array();
      for(let i = 0; i< length; i++){
        let result = myData.hourly[i];
        let weathers = {};
  
        // new Date(num)의 num은 밀리 초를 나타내기 때문에 1000을 곱하여 초로 변환한다.
        result.dt = new Date(result.dt * 1000);
        let hours = result.dt.getHours();   // 시간
        let day = result.dt.getDay();       // 요일
        day = common.convertDay(day);
        let date = result.dt.getDate();     // 일
        let month = result.dt.getMonth();   // 월
        
        console.log(`시각 : ${month}월 ${date}일 ${day} ${hours}시 `);
        console.log(`온도 : ${result.temp}`);
        console.log(`체감온도 : ${result.feels_like}`);
        console.log(`기상상태 : ${result.weather[0].description}`);
        console.log('===========================================');
        
        weathers.dt = result.dt;
        weathers.temp = result.temp;
        weathers.feels_like = result.feels_like;
        weathers.description = result.weather[0].description;
        weatherArr.push(weathers);
      }
      console.log(weatherArr);
      resolve();
    });
  }).then(()=>{
    res.redirect('/');
  });
});

module.exports = router;