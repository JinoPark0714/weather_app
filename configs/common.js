class Common{
  static instance;
  constructor(){
    if(this.instance) return this.instance;
    this.instance = this;
  }

  /**
   * 요일은 0~6사이의 정수값을 나타내기 때문에
   * 'O요일'로 변환해야 한다.
   * @param {*} param - 요일값
   */
  convertDay = (param) => {
    switch(param){
      case 0:
        param = '일';
        break;
      case 1:
        param = '월';
        break;
      case 2:
        param = '화';
        break;
      case 3:
        param = '수';
        break;
      case 4:
        param = '목';
        break;
      case 5:
        param = '금';
        break;
      case 6:
        param = '토';
        break;
    }
    return param;
  }


  /**
   * 날짜 값을 그대로 출력한다면
   * 시차를 전혀 고려하지 않은 상태로 나오기 때문에
   * 한번 변환이 필요하다.
   * @param {Date} timeValue - 시간값
   * @returns {Object}
   */
  getDate = (timeValue) => {
    // 월 값은 0부터 시작하므로 +1을 해야 함.
    let month = timeValue.getMonth() + 1;

    // 일
    let date = timeValue.getDate();

    // 요일 (number)
    let day = timeValue.getDay();
    
    // 수치에 맞게 요일로 변경
    day = this.convertDay(day);

    // 시간
    let hour = timeValue.getHours();
    const result = {month, date, day, hour};
    return result;
  }

  /**
   * 날씨 정보를 출력한다. 반복문 내에서만 사용하는 것이 좋다.
   * @param {*} param 
   * @param {*} index 
   */
  printWeather = (param, index) => {
    // 날씨 정보 출력
    console.log(`${idx + 1}번`);
    console.log(`시각 : ${param.date.month}월 ${param.date.date}일 ${param.date.day} ${param.date.hour}시 `);
    console.log(`온도 : ${param.temp}`);
    console.log(`체감온도 : ${param.feels_like}`);
    console.log(`기상상태 : ${param.description}`);
    console.log(`기상ID : ${param.id}`);
    console.log(`아이콘 : ${param.icon}`);
    console.log('===========================================');
  }
}

module.exports = new Common();