const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/getWeather', (req, res) => {
  const key = 'DAuSBAeyu149Kd6bD22jFw%2BPahE9Uw9O5iuWqFBXMYvMxPY9JzTU18ZYBrPD%2FlfK1stXrNfac%2FdlLb%2B9VzWflQ%3D%3D';
  // let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst';
  let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst';
  let queryParams = '?' + encodeURIComponent('ServiceKey') + `=${key}`; /* Service Key*/
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
  queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /* */
  queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent('20210710'); /* */
  queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600'); /* */
  queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('18'); /* */
  queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('1'); /* */

  request({
    url: url + queryParams,
    method: 'GET'
  }, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', response.headers);
    console.log('Reponse received', body);
  });
});



module.exports = router;