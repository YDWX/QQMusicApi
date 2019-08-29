const path = require('path')
const fs = require('fs')
const dir = path.join(__dirname, 'routes')

const initRoutes = (app) => {
  fs.readdir(dir, (err, routes)=>{
    if (err){
      return
    }
    routes.forEach((filename, index)=>{
      const route = require(path.join(dir, filename))
      if (!(typeof route==='function' && route.name==='route')){
        return
      }
      const api = `/${filename.replace(path.extname(filename), '')}`
      app.use(api, route)
    })
  })
}

module.exports = initRoutes
