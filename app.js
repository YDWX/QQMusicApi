var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var lessMiddleware = require('less-middleware')
var logger = require('morgan')
const cache = require('apicache').middleware

const initRoutes = require('./initRoutes')

var app = express()

// CORS
app.use((req, res, next) => {
  if(req.path !== '/' && !req.path.includes('.')){
    res.header({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8'
    })
  }
  next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(lessMiddleware(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

// cache
app.use(cache('2 minutes', ((req, res) => res.statusCode === 200)))

// cookie处理
// app.use((req, res, next) => {
//   res.cookie('test','qwer')
//   next()
// })

// 初始化路由，自动读取routes目录下的所有路由
initRoutes(app)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
