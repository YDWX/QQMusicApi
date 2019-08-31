/* GET home page. */
const consRouter = (router, request) => {
  router.get('/', function(req, res, next) {
    res.send('respond with a resource')
  })
  return router
}

module.exports = consRouter