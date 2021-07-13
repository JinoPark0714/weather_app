
let common = {};


/**
 * 날짜 값을 그대로 출력한다면
 * 시차를 전혀 고려하지 않은 상태로 나오기 때문에
 * 한번 변환이 필요하다.
 * @param {*} param 
 * @returns 
 */
common.getDate = (param) => {
  let hours = param.getHours();
  let day = param.getDay();
  let date = param.getDate();
  let month = param.getMonth();
  const result = {month, date, day, hours};
  return result;
}


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


module.exports = common;