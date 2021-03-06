const dotenv = require("dotenv");
dotenv.config();
const {API_KEY, BASE_URL} = process.env;
const {API_KEY3, BASE_URL3} = process.env;
const oneCallURI = `${BASE_URL}/onecall?`;
const oneCallURI3 = `${BASE_URL3}/onecall?`;

module.exports = {

  /**
   * 위도, 경도를 입력하여 해당 위치의 날씨를 나타낼 URL을 받아온다..
   * @param {string} lat - 위도
   * @param {string} lon - 경도
   * @returns {string}
   */
  getOneCallPosURL : (lat, lon) => {
    return `${oneCallURI}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  },


  getNewOneCallURL : (lat, lon) => {
    return `${oneCallURI3}lat=${lat}&lon=${lon}&appid=${API_KEY3}&lang=kr`;
  }
}