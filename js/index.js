function getID(param){
  return document.getElementById(param);
}

function isVoid(param){
  return param == "";
}


/**
 * 선택 시, 날씨 정보를 받아온다.
 */
const onChangeLocation = async() => {
  const location = getID('location');
  let lat, lon;
  if(!isVoid(location.value)){
    switch(location.value){
      case 'Busan':
        lat = 35.16193;
        lon = 129.04403;
        break;
      case 'Seoul':
        lat = 37.55048;
        lon = 126.98959;
        break;
      case 'Ulsan':
        lat = 35.549455;
        lon = 129.254829;
        break;
      case 'Daegu':
        lat = 35.82607;
        lon = 128.56818;
        break;
    }
    const weatherArray = await getWeatherArray(lat, lon);
    console.log(weatherArray);
    renderWeather(weatherArray);
    // getWeather(lat, lon);
  }
};

const renderWeather = (weatherArray) => {
  let str = '';
  let rowDiv = getID('row');
  rowDiv.innerHTML = '';
  const length = 24;
  for(let i = 0; i < length; i++){
    let newDiv = document.createElement('div');
    newDiv.className = 'weatherBlock';
    str += `<p>date : ${weatherArray[i].date.month}/${weatherArray[i].date.date} ${weatherArray[i].date.day} ${weatherArray[i].date.hour}시 </p>`;
    str += `<p>온도 / 체감 : ${weatherArray[i].temp}℃ / ${weatherArray[i].feels_like}℃</p>`;
    str += `<p>기상상태 : ${weatherArray[i].description}</p>`;

    // 기상 상태 아이콘 식별값을 통해 
    // openWeatherMap이 제공해주는 아이콘 이미지를 받아온다.
    str += `<img src=http://openweathermap.org/img/wn/${weatherArray[i].icon}@2x.png>`;
    newDiv.innerHTML = str;
    rowDiv.append(newDiv);
    str = '';
  }
};

/**
 * 날씨 정보를 받아온다.
 * @param {string} lat - 위도
 * @param {string} lon - 경도 
 * @returns 
 */
const getWeatherArray = async(lat, lon) => {
  const t = {
    method : "POST",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({
      lat : lat,
      lon : lon
    })
  };
  const response = await fetch("/weather/onecall", t);
  const data = await response.json();
  return data;
};


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