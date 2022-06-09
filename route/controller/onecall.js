const express = require('express');
const router = express.Router();
const openWeather = require('../../api/openWeather');
const {OneCallService} = require("../service/onecall");
const {ErrorHandler} = require('../../util/ErrorHandler');
const {UtilService} = require('../../util/Util');

/**
 * 24시간 간격의 날씨 정보를 받아온다.
 * 우선 테스트는 부산을 목표로
 */
router.post('/', async (req, res)=>{
  
  // 위도, 경도 값을 추출한다.
  const {latitude, longitude} = req.body;
  const errorHandler = ErrorHandler;
  const oneCallService = new OneCallService();
  const utilService = UtilService;
  if(utilService.isFalse(latitude) || utilService.isFalse(longitude))
    return errorHandler.responseInternalError(res, "Internal Error");
  
  const weatherArray = await oneCallService.getWeatherArrayByHour(latitude, longitude);
  
  console.log(weatherArray);
  return res.send(weatherArray);
});

module.exports = router;