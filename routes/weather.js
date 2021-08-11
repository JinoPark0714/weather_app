const express = require('express');
const router = express.Router();
const request = require('request');
const openWeather = require('../configs/openWeatherConfig');
const common = require('../configs/common');

/**
 * 24시간 간격의 날씨 정보를 받아온다.
 * 우선 테스트는 부산을 목표로
 */
router.get('/get/onecall', (req, res)=>{
  
  // 위도, 경도 값을 추출한다.
  const {lat, lon} = req.query;
  
  // 위도, 경도 값 출력
  console.log(`위도 : ${lat}`);
  console.log(`경도 : ${lon}`);

  // 위도, 경도를 통해 날씨를 나타낼 URL을 가져옴
  const uri = openWeather.getURLOneCallPos(lat, lon);

  // request 인자에 넣을 변수
  const param = {uri : uri};
  new Promise((resolve, reject)=>{
    request.get(param,(err, res, body)=>{
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
      const length = myData.hourly.length - 24; // 시간별 48개니까 24개만 받아옴

      let weatherArr = [];
      for(let i = 0; i < length; i++){
        let result = myData.hourly[i];
        let weather = {};
  
        // new Date(num)의 num은 밀리 초를 나타내기 때문에 1000을 곱하여 초로 변환한다.
        result.dt = new Date((result.dt * 1000));
        
        // 날짜 정보
        weather.date = common.getDate(result.dt);

        // 온도
        weather.temp = parseInt(result.temp);
        
        // 체감 온도
        weather.feels_like = parseInt(result.feels_like);
        
        // 기상 상태
        weather.description = result.weather[0].description;
        
        // 기상 상태 ID
        weather.id = result.weather[0].id;

        // 기상 상태 아이콘 식별값
        weather.icon = result.weather[0].icon;

        weatherArr.push(weather);
      }
      
      // 날씨 정보를 모두 받아서 반환한다.
      resolve(weatherArr);
    });
  })
  .then((weathers)=>{
    // 클라이언트로 날씨 정보를 전송한다.
    res.send(weathers);
  });
});

module.exports = router;