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

/**
 * 영어로 표기된 것을 한글로 변환
 * @param {*} param 
 */
function convertKr(param){
  let data;
  switch(param){
    case "Clouds":
      data = "흐림";
      break;
    case "Mist":
      data = "안개";
      break;
  }
  return data;
}

window.onload = () => {
};


function onClickgetWeather(){
  const cityName = getID('city').value;
  $.ajax({
    type : "GET",
    url : `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c4752dbd6e3cc9737879b80ef9cfd01f`,
    // url : `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c4752dbd6e3cc9737879b80ef9cfd01f`,
    // url : `api.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=c4752dbd6e3cc9737879b80ef9cfd01f`,
    contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
    success : (data)=>{
      const weatherInfo = (data);
      let weatherState = getH2('날씨', weatherInfo.weather[0].main);
      const cityName = getH2('지역', weatherInfo.name);
      let div = getID('result');
      div.innerHTML = weatherState;
      div.innerHTML += cityName;
    },
    error : (err)=>{
      console.log(err);
      document.body.innerHTML = `<h2> ${err}</h2>`;
    }
  })
}