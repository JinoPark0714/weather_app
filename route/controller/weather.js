const express = require('express');
const router = express.Router();
const openWeather = require('../../configs/openWeatherConfig');
const weatherService = require("../service/weather");
const Common = require('../../configs/common');

/**
 * 24시간 간격의 날씨 정보를 받아온다.
 * 우선 테스트는 부산을 목표로
 */
router.post('/onecall', async (req, res)=>{
  
  // 위도, 경도 값을 추출한다.
  const {lat, lon} = req.body;

  // 위도, 경도 값 출력
  console.log(`위도 : ${lat}`);
  console.log(`경도 : ${lon}`);

  // 위도, 경도를 통해 날씨를 나타낼 URL을 가져옴
  const uri = openWeather.getOneCallPosURL(lat, lon);
  const data = await weatherService.getWeathersInfo(uri);
  if(data === null || data === undefined)
    res.render("errorpage");

  const weatherArray = await weatherService.getWeatherArray(data);
  if(weatherArray === null || weatherArray === undefined)
    res.render("errorpage");
  res.send(weatherArray);
});

module.exports = router;