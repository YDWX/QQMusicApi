const path = require('path')
const fs = require('fs')
const dir = path.join(__dirname, 'routes')

const initRoutes = (app) => {
  fs.readdir(dir, (err, routes)=>{
    if (err){
      return
    }
    routes.forEach((file_path, index)=>{
      const route = require(file_path)
      const api = path.basename(file_path)
      app.use(api, route)
    })
  })
}

module.exports = initRoutes