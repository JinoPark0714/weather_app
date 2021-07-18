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
      let tempArr = new Array();
      let weatherArr = {};
      let rowDiv = getID('row');
      console.log(weatherData);
      // 현재 텍스트로 출력되는 부분
      for(let i = 0; i < weatherData.length; i++){
        let newDiv = document.createElement('div');
        newDiv.className = 'col';
        newDiv.id = i;
        newDiv.style.display='inline-block';
        newDiv.style.margin='10px';
        str += `<h5>date : ${weatherData[i].date.month}/${weatherData[i].date.date} ${weatherData[i].date.day} ${weatherData[i].date.hour}시 </h5>`;
        str += `<h5>온도 : ${weatherData[i].temp}도</h5>`;
        str += `<h5>체감온도 : ${weatherData[i].feels_like}도</h5>`;
        str += `<h5>기상상태 : ${weatherData[i].description}</h5>`;
        newDiv.innerHTML = str;
        rowDiv.append(newDiv);
        str = '';
        // weatherArr.temp = weatherData[i].temp;
        // weatherArr.time = weatherData[i].date.hour;
        // tempArr.push(weatherArr);
      }
      //drawTempGraph(tempArr);
    },
    error : (err)=>{
      console.log(err);
      document.body.innerHTML = `<h2> ${err}</h2>`;
    }
  })
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