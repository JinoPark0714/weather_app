const request = require('supertest');
const app = require('./app');


// describe('Test', ()=>{
//   const res = {
//     status : jest.fn(()=>res),
//     send : jest.fn()
//   };
//   const next = jest.fn();
// });

test("올바른 위도, 경도는 날씨 정보를 알 수 있다.", (done) => {
  const testData = {
    latitude : 37.55048,
    longitude : 126.98959
  };
  request(app).post('/onecall').send(testData).end(done);
});

test("잘못된 위도, 경도는 날씨 정보를 알 수 없다.", async ()=>{
  const testData = {
    latitude : 37.55048
  };
  const result = await request(app).post('/onecall').send(testData);
  expect(result.statusCode).toEqual(500);
});