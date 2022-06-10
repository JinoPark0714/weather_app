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
    koreanName : '부산',
    latitude : 35.16193,
    longitude : 129.04403
  },
  {
    name : 'Seoul',
    koreanName : '서울',
    latitude : 37.55048,
    longitude : 126.98959
  },
  {
    name : 'Ulsan',
    koreanName : '울산',
    latitude : 35.549455,
    longitude : 129.254829
  },
  {
    name : 'Daegu',
    koreanName : '대구',
    latitude : 35.82607,
    longitude : 128.56818
  },
  {
    name : 'Gumi',
    koreanName : '구미',
    latitude : 36.119485,
    longitude : 128.3445734
  },
  {
    name : 'Gyeonggi-do',
    koreanName : '경기도',
    latitude : 35.95,
    longitude : 128.25
  }
]