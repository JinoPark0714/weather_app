/**
 * 서버를 구성하기 위한 요소 정의
 */
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 40900;

// 로그 기록을 남기는 기능을 한다.
// 값에 따라 남겨지는 용도가 다르다.
// dev      (개발)
// short    (개발)
// common   (배포)
// combined (배포)
const morgan = require('morgan');


/**
 * 서버 정보 설정
 */
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/', express.static(__dirname + '/views'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));

/**
 * 라우터 정의
 */
const pageConnRouter = require('./routes/pageConn');
const weatherRouter = require('./routes/weather');

/**
 * 서버를 구성하기 위한 라우터 연결
 */
app.use('/', pageConnRouter);
app.use('/weather', weatherRouter);


/**
 * 서버 가동
 */
const server = app.listen(PORT, ()=>{
  console.log(`start server : ${PORT}`);
});