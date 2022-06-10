function getID(param) {
  return document.getElementById(param);
}

function isVoid(param) {
  return param == "";
}



/**
 * 선택 시, 날씨 정보를 받아온다.
 */
const onChangeLocation = async () => {
  const location = getID('location');
  let latitude, longitude;
  if (!isVoid(location.value)) {
    switch (location.value) {
      case 'Busan':
        latitude = 35.16193;
        longitude = 129.04403;
        break;
      case 'Seoul':
        latitude = 37.55048;
        longitude = 126.98959;
        break;
      case 'Ulsan':
        latitude = 35.549455;
        longitude = 129.254829;
        break;
      case 'Daegu':
        latitude = 35.82607;
        longitude = 128.56818;
        break;
      case 'Gumi':
        latitude = 36.119485;
        longitude = 128.3445734;
        break;
      case 'Gyeonggi-do':
        latitude = 35.95;
        longitude = 128.25;
        break;

    }
    const weatherArray = await getWeatherArray(latitude, longitude);
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
  for (let i = 0; i < length; i++) {
    let newDiv = document.createElement('div');
    newDiv.className = 'weatherBlock';
    str += `
    <p>date : ${weatherArray[i].date.month}/${weatherArray[i].date.date} ${weatherArray[i].date.day} ${weatherArray[i].date.hour}시 </p>
    <p>온도 / 체감 : ${weatherArray[i].temp}℃ / ${weatherArray[i].feels_like}℃</p>
    <img src=http://openweathermap.org/img/wn/${weatherArray[i].icon}@2x.png>
    `;
    // // 기상 상태 아이콘 식별값을 통해 
    // // openWeatherMap이 제공해주는 아이콘 이미지를 받아온다.
    newDiv.innerHTML = str;
    rowDiv.append(newDiv);
    str = '';
  }
};

/**
 * 날씨 정보를 받아온다.
 * @param {string} latitude - 위도
 * @param {string} longitude - 경도 
 */
const getWeatherArray = async (latitude, longitude) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude
    })
  };
  const response = await fetch("/onecall", options);
  const data = await response.json();
  return data;
};