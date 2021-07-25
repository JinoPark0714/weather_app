module.exports = {
  apps : [{
    instance : 1,
    exec_mode : 'cluster',
    name   : "app1",
    script : "./app.js",
    watch : true,
    log_date_format : "YYYY-MM-DD HH:MM Z",
    error_file : "./log/app-err.log",
    out_file : "./log/app-out.log"
  }]
}
