
let common = {};

/**
 * 요일은 0~6사이의 정수값을 나타내기 때문에
 * 'O요일'로 변환해야 한다.
 * @param {*} param 
 */
 common.convertDay = (param) => {
  switch(param){
    case 0:
      param = '일요일';
      break;
    case 1:
      param = '월요일';
      break;
    case 2:
      param = '화요일';
      break;
    case 3:
      param = '수요일';
      break;
    case 4:
      param = '목요일';
      break;
    case 5:
      param = '금요일';
      break;
    case 6:
      param = '토요일';
      break;
  }

  return param;
}

/**
 * 날짜 값을 그대로 출력한다면
 * 시차를 전혀 고려하지 않은 상태로 나오기 때문에
 * 한번 변환이 필요하다.
 * @param {Date} param 
 * @returns {Object}
 */
common.getDate = (param) => {
  let hour = param.getHours();        // 시
  let day = param.getDay();           // 요일, 값으로 나옴
  day = common.convertDay(day);       // 수치에 맞게 요일로 변경
  let date = param.getDate();         // 일
  let month = param.getMonth() + 1;   // 월은 0부터 시작하여 +1
  const result = {month, date, day, hour};
  return result;
}

/**
 * 날씨 정보를 출력한다.  
 * @param {object} param 
 */
common.printWeather = (param)=>{
  console.log(`시각 : ${param.date.month}월 ${param.date.date}일 ${param.date.day} ${param.date.hour}시 `);
  console.log(`온도 : ${param.temp}`);
  console.log(`체감온도 : ${param.feels_like}`);
  console.log(`기상상태 : ${param.description}`);
  console.log('===========================================');
};



module.exports = common;