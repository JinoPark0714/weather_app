module.exports = {
  apps : [{
    // 서버를 실행할 서버 인스턴스 개수
    instances : 1,

    // 서버를 실행할 모드
    exec_mode : 'cluster',

    // 서버 이름
    name   : "weatherApp",

    // 서버를 실행할 스크립트 파일
    script : "./app.js",

    // 서버 내 파일의 변경사항이 적용되면 서버 재실행
    watch : ["route", "views", "css"],

    // 재시작 딜레이
    restart_delay : 2000,

    // 다음 폴더들은 변경사항이 있어도 watch가 적용되지 않음.
    ignore_watch : ["log", ".git"],

    // 일정 메모리를 차지하면 서버 재시작
    max_memory_restart : "500M",

    // 서버에 찍히는 로그를 출력하는 방식
    log_date_format : "YYYY-MM-DD HH:MM Z",

    // 에러 로그를 저장할 파일
    error_file : "./log/app-err.log",

    // 출력 로그를 저장할 파일
    out_file : "./log/app-out.log"
  }]
}
