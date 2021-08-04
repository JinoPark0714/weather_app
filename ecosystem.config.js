module.exports = {
  apps : [{
    instances : 1,
    exec_mode : 'cluster',
    name   : "app1",
    script : "./app.js",
    watch : true,
    watch_delay : 2000,
    ignore_watch : ["log", ".git"],
    max_memory_restart : "500M",
    log_date_format : "YYYY-MM-DD HH:MM Z",
    error_file : "./log/app-err.log",
    out_file : "./log/app-out.log"
  }]
}
