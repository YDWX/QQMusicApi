// 热搜
const consRouter = (router, request) => {
  const uri = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  const data = {
    g_tk: 5381,
    _: (new Date()).getTime()
  }
  router.get('/', (req, res, next) => {
    request('GET', uri, {}, data).then((resp)=>{
      res.status(200).json(resp.body)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return router
}

module.exports = consRouter