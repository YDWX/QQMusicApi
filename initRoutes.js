const path = require('path')
const fs = require('fs')
const dir = path.join(__dirname, 'routes')

const initRoutes = (app) => {
  fs.readdirSync(dir).forEach(filename => {
    const router = require(path.join(dir, filename))
    if (!(typeof router==='function' && router.name==='router')){
      return
    }
    const api = `/${filename.replace(path.extname(filename), '')}`
    console.log(api)
    app.use(api, router)
  })
}

module.exports = initRoutes
