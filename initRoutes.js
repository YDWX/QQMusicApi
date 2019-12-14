const express = require('express')
const request = require('./util/request')
const path = require('path')
const fs = require('fs')
const dir = path.join(__dirname, 'routes')

const initRoutes = (app) => {
  fs.readdirSync(dir).forEach(filename => {
    const consRouter = require(path.join(dir, filename))
    if (!(typeof consRouter==='function')){
      return
    }
    const router = express.Router()
    const api = `/${filename.replace(path.extname(filename), '')}`
    console.log(api)
    app.use(api, consRouter(router, request))
  })
  process.env.NODE_ENV = 'development'
  if (process.env.NODE_ENV === 'development') {
    app.use((err, req, res, next) => {
      // if (err instanceof ev.ValidationError) {
      //   res.json(err)
      //   return
      // }
      if (!err.status) {
        res.json({ code: 1, status: 500, err, msg: '服务器错误', detail: '', data: {} })
        return
      }
      res.json({
        code: err.code,
        status: err.status,
        msg: err.msg,
        err: err.err,
        detail: err.detail,
        data: {}
      })
    })
  } else {
    app.use((err, req, res, next) => {
      // if (err instanceof ev.ValidationError) {
      //   res.json(err)
      //   return
      // }
      if (!err.status) {
        res.json({ code: 1, status: 500, msg: '服务器错误', detail: '', data: {} })
        return
      }
      res.json({
        code: err.code,
        status: err.status,
        msg: err.msg,
        data: {}
      })
    })
  }
}

module.exports = initRoutes
