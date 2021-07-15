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
}

window.onload = () => {
  onClickgetWeather();
};


function onClickgetWeather(){
  $.ajax({
    type : "GET",
    url : '/weather/oneCall',
    contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
    success : (weatherData)=>{
      let str = '';
      for(let i = 0; i < weatherData.length; i++){
        str += `<h3>date : ${weatherData[i].date.month}월 ${weatherData[i].date.date}일 ${weatherData[i].date.day} ${weatherData[i].date.hour}시 </h3>`;
        str += `<h3>온도 : ${weatherData[i].temp}도</h3>`;
        str += `<h3>체감온도 : ${weatherData[i].feels_like}도</h3>`;
        str += `<h3>기상상태 : ${weatherData[i].description}</h3>`;
      }
      let resDiv = getID('result');
      resDiv.innerHTML = str;
    },
    error : (err)=>{
      console.log(err);
      document.body.innerHTML = `<h2> ${err}</h2>`;
    }
  })
}