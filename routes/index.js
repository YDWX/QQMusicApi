/* GET home page. */
const consRouter = (router, request) => {
  router.get('/', function(req, res, next) {
    res.type('html')
    res.render('index', { title: 'Express' })
  })
  return router
}

module.exports = consRouter