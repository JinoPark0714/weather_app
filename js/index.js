/**
 * ID 받아오기
 * @param {string} param 
 * @returns 
 */
function getID(param){
  return document.getElementById(param);
}

/**
 * 
 * @param {*} state 
 * @param {*} param 
 * @returns 
 */
function getH2(state, param){
  return `<h2>${state} : ${param}</h2>`;
}



window.onload = () => {
  
};

/**
 * 영어로 표기된 것을 한글로 변환
 */
function onChangeLocation(){
  const location = getID('location');
  let lat, lon;
  switch(location.value){
    case 'Busan':
      lat = 35.17944;
      lon = 129.07556;
      getWeather(lat, lon);
      break;
    case 'Seoul':
      lat = 37.5642135;
      lon = 127.0016985;
      getWeather(lat, lon);
      break;
  }
}

/**
 * 날씨 정보를 받아옴.
 */
function getWeather(lat, lon){
  const param = {
    "lat" : lat,
    "lon" : lon
  };
  $.ajax({
    type : "GET",
    url : '/weather/oneCall',
    data : param,
    dataType : 'json',
    contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
    success : (weatherData)=>{
      let str = '';
      let rowDiv = getID('row');
      rowDiv.innerHTML = '';
      console.log(weatherData);
      // 현재 텍스트로 출력되는 부분
      for(let i = 0; i < weatherData.length; i++){
        let newDiv = document.createElement('div');
        newDiv.className = 'weatherBlock';
        str += `<p>date : ${weatherData[i].date.month}/${weatherData[i].date.date} ${weatherData[i].date.day} ${weatherData[i].date.hour}시 </p>`;
        str += `<p>온도 / 체감 : ${weatherData[i].temp}℃ / ${weatherData[i].feels_like}℃</p>`;
        str += `<p>기상상태 : ${weatherData[i].description}</p>`;
        str += `<img src=http://openweathermap.org/img/wn/${weatherData[i].icon}@2x.png>`;
        newDiv.innerHTML = str;
        rowDiv.append(newDiv);
        str = '';
      }
      //drawTempGraph(tempArr);
    },
    error : (err)=>{
      console.log(err);
      document.body.innerHTML = `<h2> ${err}</h2>`;
    }
  })
};

// function onClickgetWeather(){
//   $.ajax({
//     type : "GET",
//     url : '/weather/oneCall',
//     contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
//     success : (weatherData)=>{
//       let str = '';
//       let rowDiv = getID('row');
//       console.log(weatherData);
//       // 현재 텍스트로 출력되는 부분
//       for(let i = 0; i < weatherData.length; i++){
//         let newDiv = document.createElement('div');
//         newDiv.className = 'weatherBlock';
//         str += `<p>date : ${weatherData[i].date.month}/${weatherData[i].date.date} ${weatherData[i].date.day} ${weatherData[i].date.hour}시 </p>`;
//         str += `<p>온도 / 체감 : ${weatherData[i].temp}℃ / ${weatherData[i].feels_like}℃</p>`;
//         str += `<p>기상상태 : ${weatherData[i].description}</p>`;
//         str += `<img src=http://openweathermap.org/img/wn/${weatherData[i].icon}@2x.png>`;
//         newDiv.innerHTML = str;
//         rowDiv.append(newDiv);
//         str = '';
//       }
//       //drawTempGraph(tempArr);
//     },
//     error : (err)=>{
//       console.log(err);
//       document.body.innerHTML = `<h2> ${err}</h2>`;
//     }
//   })
// };


function drawTempGraph(tempArr) {
  const ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'], 
      datasets: [{
        label: '기온변화',
        data: tempArr.temp,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}