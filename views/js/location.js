/**
 * 지명을 통해 위도와 경도를 반환한다.
 * @returns lat,lon
 */
function findLocation(value){
  const length = array.length;
  const pos = {};
  for(let i = 0; i < length; i++){
    if(value = array[i].name){
      pos.lat = array[i].lat;
      pos.lon = array[i].lon;
      return pos;
    }
  }
}

const array = [
  {
    name : 'Busan',
    lat : 35.16193,
    lon : 129.04403
  },
  {
    name : 'Seoul',
    lat : 37.55048,
    lon : 126.98959
  },
  {
    name : 'Ulsan',
    lat : 35.549455,
    lon : 129.254829
  },
  {
    name : 'Daegu',
    lat : 35.82607,
    lon : 128.56818
  },
  {
    name : 'Gyeonggi-do',
    lat : 35.95,
    lon : 128.25
  }
]