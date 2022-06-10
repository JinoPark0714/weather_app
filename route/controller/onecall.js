const express = require('express');
const router = express.Router();
const {OneCallService} = require("../service/onecall");
const {UtilService} = require('../../util/Util');
const os = require('os');

router.post('/', async (request, response)=>{

  // 위도, 경도 값을 추출한다.
  const {latitude, longitude} = request.body;
  const utilService = UtilService;
  const oneCallService = new OneCallService();
  console.log(`os : ${os.type()}`);
  if(utilService.isFalse(latitude) || utilService.isFalse(longitude)){
    return response.status(404).json({
      status:404,
      message : "Not Found Weather"
    });
  }
  
  const weatherArray = await oneCallService.getWeatherArrayByHour(latitude, longitude);
  return response.send(weatherArray);
});

module.exports = router;