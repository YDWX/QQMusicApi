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
}

module.exports = initRoutes
